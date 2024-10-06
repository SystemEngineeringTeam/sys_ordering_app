import { type order, type orderCollection, type orderData } from '@/types/type';
import { addDoc, collection, doc, runTransaction, setDoc } from 'firebase/firestore';
import converter, { db, user } from './firebase';

// 注文情報を追加する関数
export const setOrderCollection = async (orderData: orderData[]) => {
  const { uid } = user;
  try {
    //   トランザクションを実行して、新しいドキュメントIDを取得
    const newDocID = await runTransaction(db, async (transaction) => {
      // 更新前の番号を取得
      const counterDocRef = doc(db, 'shop_user', uid);
      const counterDocSnap = await transaction.get(counterDocRef);

      // すでにカウンターが存在しない場合はエラーをスロー
      if (!counterDocSnap.exists()) {
        throw new Error('Counter document does not exist!');
      }

      // 現在の番号を取得
      const OrderNumbe: number = counterDocSnap.data().sequences;
      const newNumber = OrderNumbe + 1;

      // 新しい番号をセット
      transaction.update(counterDocRef, { sequences: newNumber });

      return newNumber;
    });

    const orderCollectionRef = doc(db, 'shop_user', uid, 'orderCollection', newDocID.toString()).withConverter(
      converter<orderCollection>(),
    );

    // 現在の時間をミリ秒で取得
    const timestamp = new Date().getTime();

    await setDoc(orderCollectionRef, {
      accounting: false,
      cooking: false,
      offer: false,
      timestamp,
    });

    // サブコレクションに注文情報を追加
    const orderRef = collection(orderCollectionRef, 'order').withConverter(converter<order>());

    orderData.forEach(async (data) => {
      await addDoc(orderRef, data);
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
