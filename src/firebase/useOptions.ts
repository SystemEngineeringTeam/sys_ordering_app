import { type options } from '@/types/type';
import { collection, onSnapshot, type PartialWithFieldValue, type QueryDocumentSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db, user } from './firebase';

function converter<T>() {
  return {
    toFirestore: (data: PartialWithFieldValue<T>) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

// options のデータをリアルタイムで取得する関数
export const useOptions = () => {
  const [options, setOptions] = useState<options[]>([]);

  const colRef = collection(db, 'shop_user', user.uid, 'options').withConverter(converter<options>());

  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      setOptions((prevOptions) => {
        let updatedOptions = [...prevOptions];

        snapshot.docChanges().forEach((change) => {
          const docSnapshot = change.doc;
          const Docdata = docSnapshot.data();

          const newData: options = {
            id: docSnapshot.id,
            name: Docdata.name as string,
            price: Docdata.price as number,
          };

          if (change.type === 'added') {
            // 既存データに同じIDがない場合のみ追加
            if (!updatedOptions.some((item) => item.id === newData.id)) {
              updatedOptions.push(newData);
            }
          }

          if (change.type === 'modified') {
            // 変更されたデータを上書き
            updatedOptions = updatedOptions.map((item) => (item.id === newData.id ? newData : item));
          }

          if (change.type === 'removed') {
            // 削除されたデータをフィルタリング
            updatedOptions = updatedOptions.filter((item) => item.id !== newData.id);
          }
        });

        return updatedOptions;
      });
    });

    return () => {
      unsub();
    };
  }, []);

  return options;
};
