import { orderData } from '@/types/type';
import { collection } from 'firebase/firestore';
import { db, user } from './firebase';

// 注文情報を作成する関数
export const createOrderData = (itemId: string, optionId: string[], qty: number) => {
  const itemRef = collection(db, 'shop_user', user.uid, 'item', itemId);

  const optionsRef = optionId.map((id) => {
    return collection(db, 'shop_user', user.uid, 'options', id);
  });

  const orderData: orderData = {
    item: itemRef,
    options: optionsRef,
    qty: qty,
  };

  return orderData;
};
