import { collection, onSnapshot } from 'firebase/firestore';
import converter, { db, user } from './firebase';
import { category } from '@/types/type';
import { useEffect, useState } from 'react';

// category のデータをリアルタイムで取得する関数
export const getCategory = () => {
  const [category, setCategory] = useState<category[]>([]);

  // const user = useAtomValue(userAtom);

  // if (!user) {
  //   throw new Error('User is not logged in');
  // }

  const colRef = collection(db, 'shop_user', user.uid, 'category').withConverter(converter<category>());

  useEffect(() => {
    const unsb = onSnapshot(colRef, (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        const docSnapshot = change.doc;
        const Docdata = docSnapshot.data();

        const newData: category = {
          id: docSnapshot.id,
          name: Docdata.name as string,
        };

        // 追加時
        if (change.type === 'added') {
          setCategory((prevCategory) => [...(prevCategory || []), newData]);
        }

        // 変更時
        if (change.type === 'modified') {
          setCategory((prevCategory) => {
            if (!prevCategory) return prevCategory;
            return prevCategory.map((category) => {
              if (category.id === docSnapshot.id) {
                return newData;
              }
              return category;
            });
          });
        }

        // 削除時
        if (change.type === 'removed') {
          setCategory((prevCategory) => {
            if (!prevCategory) return prevCategory;
            return prevCategory.filter((category) => category.id !== docSnapshot.id);
          });
        }
      });
    });
    console.log('categoryChange');

    return () => {
      unsb();
    };
  }, []);

  return { category };
};
