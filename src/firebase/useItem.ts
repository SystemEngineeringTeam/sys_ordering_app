import { useEffect, useState } from 'react';
import { useOptions } from './useOptions';
import { collection, onSnapshot } from 'firebase/firestore';
import converter, { db, user } from './firebase';
import { items } from '@/types/type';

export function useItem() {
  const [items, setItems] = useState<items[] | null>(null);

  const colRef = collection(db, 'shop_user', user.uid, 'item').withConverter(converter<items>());
  const optionData = useOptions(); // カスタムフックの使用

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();

        const newData: items = {
          id: docSnapshot.id,
          name: Docdata.name as string,
          category_id: Docdata.category_id as string,
          price: Docdata.price as number,
          visible: Docdata.visible as boolean,
          options: optionData.options, // フックの結果をここで使用
          imgUrl: Docdata.imgUrl as string,
        };

        if (change.type === 'added') {
          setItems((prevData) => [...(prevData || []), newData]);
        }

        if (change.type === 'modified') {
          setItems((prevData) => {
            if (!prevData) return prevData;
            return prevData.map((data) => {
              if (data.id === docSnapshot.id) {
                return newData;
              }
              return data;
            });
          });
        }

        if (change.type === 'removed') {
          setItems((prevData) => {
            if (prevData) {
              return prevData.filter((data) => data.id !== docSnapshot.id);
            }
            return prevData;
          });
        }
      });
    });

    return () => {
      unsub();
    };
  }, []);

  console.log(items);

  return items;
}
