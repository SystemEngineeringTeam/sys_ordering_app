import { collection, onSnapshot } from 'firebase/firestore';
import converter, { db, user } from './firebase';
import { type category } from '@/types/type';
import { useEffect, useState } from 'react';

// category のデータをリアルタイムで取得する関数
export const useCategory = () => {
  const home: category = {
    id: '1oCkzsvqyFSqxaDIAOMz',
    name: 'ホーム',
  };
  const [category, setCategory] = useState<category[]>([home]);

  const colRef = collection(db, 'shop_user', user.uid, 'category').withConverter(converter<category>());

  useEffect(() => {
    const unsb = onSnapshot(colRef, (snapshot) => {
      setCategory((prevCategory) => {
        let updatedCategory = [...prevCategory]; // 既存のデータをコピー

        snapshot.docChanges().forEach((change) => {
          const docSnapshot = change.doc;
          const Docdata = docSnapshot.data();

          const newData: category = {
            id: docSnapshot.id,
            name: Docdata.name as string,
          };

          if (change.type === 'added') {
            // 追加されたデータが既に存在していないかチェック
            if (!updatedCategory.some((item) => item.id === newData.id)) {
              updatedCategory.push(newData);
            }
          }

          if (change.type === 'modified') {
            // 変更されたデータを上書き
            updatedCategory = updatedCategory.map((item) => (item.id === newData.id ? newData : item));
          }

          if (change.type === 'removed') {
            // 削除されたデータを除外
            updatedCategory = updatedCategory.filter((item) => item.id !== newData.id);
          }
        });

        return updatedCategory;
      });
    });

    console.log('categoryChange');

    return () => {
      unsb(); // クリーンアップ処理でリスナー解除
    };
  }, []);

  return category;
};
