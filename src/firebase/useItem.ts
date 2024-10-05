import { items } from '@/types/type';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db, user } from './firebase';
import { useOptions } from './useOptions';


export const useItem = () => {
  //     const user = useAtomValue(userAtom);
  //   if (!user) {
  //     throw new Error('User is not logged in');
  //   }

  const [items, setItems] = useState<items[] | null>(null);

  const colRef = collection(db, 'shop_user', user.uid, 'item');

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();

        const optionData = useOptions();

        const newData: items = {
          id: docSnapshot.id,
          name: Docdata.name as string,
          category_id: Docdata.category_id as string,
          price: Docdata.price as number,
          visible: Docdata.visible as boolean,
          options: optionData.options,
          imgUrl: Docdata.imgUrl as string,
        };

        // 追加時
        if (change.type === 'added') {
          setItems((prevData) => [...(prevData || []), newData]);
        }

        // 修正（更新時）
        if (change.type === 'modified') {
          setItems((prevData) => {
            if (prevData) {
              return prevData.map((data) => {
                if (data.id === docSnapshot.id) {
                  return newData;
                }
                return data;
              });
            }
            return prevData;
          });
        }

        // 完全削除時
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
    console.log('itemChange');

    return () => {
      unsub();
    };
  }, []);

  return {
    items,
  };
};
