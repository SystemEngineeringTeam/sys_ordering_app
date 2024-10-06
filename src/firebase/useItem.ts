import { items, options } from '@/types/type';
import { collection, DocumentReference, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import converter, { db, user } from './firebase';

export function useItem() {
  const [items, setItems] = useState<items[] | null>(null);
  const colRef = collection(db, 'shop_user', user.uid, 'item').withConverter(converter<items>());

  useEffect(() => {
    const unsub = onSnapshot(colRef, async (snapshot) => {
      let updatedItems: items[] = [];

      await Promise.all(
        snapshot.docChanges().map(async (change) => {
          const docSnapshot = change.doc;
          const Docdata = docSnapshot.data();

          // オプションのリアルタイムリスナーをセットアップ
          const optionsArry = Array.isArray(Docdata.options)
            ? Docdata.options.filter((option): option is DocumentReference => option instanceof DocumentReference)
            : [];
          const newOptionData = await fetchOptionsRealtime(optionsArry);

          const newData: items = {
            id: docSnapshot.id,
            name: Docdata.name as string,
            category_id: Docdata.category_id as string,
            price: Docdata.price as number,
            visible: Docdata.visible as boolean,
            options: newOptionData, // オプションのリアルタイムデータをここに
            imgUrl: Docdata.imgUrl as string,
          };

          // 変更、追加、削除されたアイテムを更新
          if (change.type === 'added') {
            updatedItems.push(newData);
          } else if (change.type === 'modified') {
            updatedItems = updatedItems.map((item) => (item.id === newData.id ? newData : item));
          } else if (change.type === 'removed') {
            updatedItems = updatedItems.filter((item) => item.id !== newData.id);
          }
        }),
      );

      setItems(updatedItems);
    });

    return () => unsub();
  }, []);

  // オプションデータをリアルタイムで取得する
  const fetchOptionsRealtime = (optionsArry: any[]) => {
    // optionsArry の中身が DocumentReference かどうかをチェック
    const validOptionRefs = optionsArry.filter(
      (optionRef): optionRef is DocumentReference => optionRef instanceof DocumentReference,
    );

    if (!validOptionRefs.length) return Promise.resolve([]);

    return new Promise<options[]>((resolve) => {
      const allOptions: options[] = [];
      const unsubscribes = validOptionRefs.map((optionRef) => {
        return onSnapshot(optionRef, (docSnapshot) => {
          const Docdata = docSnapshot.data();
          if (Docdata) {
            const newOption: options = {
              id: docSnapshot.id,
              name: Docdata.name,
              price: Docdata.price,
            };

            // データを更新
            const existingIndex = allOptions.findIndex((opt) => opt.id === newOption.id);
            if (existingIndex >= 0) {
              allOptions[existingIndex] = newOption;
            } else {
              allOptions.push(newOption);
            }

            resolve(allOptions); // 更新されたオプションリストを resolve
          }
        });
      });

      // リスナーのクリーンアップ
      return () => unsubscribes.forEach((unsub) => unsub());
    });
  };

  return items;
}
