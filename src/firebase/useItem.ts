import { collection, DocumentData, DocumentReference, getDoc, onSnapshot } from 'firebase/firestore';
import converter, { db, user } from './firebase';
import { items, options } from '@/types/type';
import { useEffect, useState } from 'react';

export function useItem() {
  const [data, setData] = useState<items[]>();
  const colRef = collection(db, 'shop_user', user.uid, 'item').withConverter(converter<items>());

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();

        const itemData = docSnapshot.data() as DocumentData;
        const optionsArray = itemData.options ?? [];
        const optionData: options[] = await Promise.all(
          optionsArray.map(async (optionRef: DocumentReference) => {
            const optionSnap = await getDoc(optionRef);
            if (optionSnap.exists()) {
              return {
                id: optionSnap.id,
                name: optionSnap.data()?.name as string,
                price: optionSnap.data()?.price as number,
              };
            }
            return { id: null, name: null, price: null };
          }),
        );

        const newData: items = {
          id: docSnapshot.id,
          name: Docdata.name as string,
          price: Docdata.price as number,
          category_id: Docdata.category_id as string,
          visible: Docdata.visible as boolean,
          options: optionData as options[],
          imgUrl: Docdata.imgUrl as string,
        };

        // 追加時
        if (change.type === 'added') {
          setData((prevData) => [...(prevData || []), newData]);
        }

        // 修正（更新時）
        if (change.type === 'modified') {
          setData((prevData) => {
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
          setData((prevData) => {
            if (prevData) {
              return prevData.filter((data) => data.id !== docSnapshot.id);
            }
            return prevData;
          });
        }
      });
    });

    console.log('Changed!!!');
    // const newData = snapshot.docs.map((doc) => doc.data() as orderCollection);
    // setData(newData);
    return () => {
      unsub();
    };
  }, []);
  return data;
}
