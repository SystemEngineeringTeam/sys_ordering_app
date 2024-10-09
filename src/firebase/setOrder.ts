import { type cartData, type orderData } from '@/types/type';
import { collection } from 'firebase/firestore';
import { db, user } from './firebase';

// 注文情報を作成する関数

// cartを受け取り、orderDat
export const processingCart = (cart: any) => {
  const orderData = cart.map((item: any) => {
    const orderData = createOrderData(item.itemId, item.options, item.qty);
    return orderData;
  });
  return orderData;
};

// itemID, optionID, qtyを受け取り、orderDataを作成する関数
export const createOrderData = (itemId: string, optionId: string[], qty: number) => {
  const itemRef = collection(db, 'shop_user', user.uid, 'item', itemId);

  const optionsRef = optionId.map((id) => {
    return collection(db, 'shop_user', user.uid, 'options', id);
  });

  const orderData: orderData = {
    item: itemRef,
    options: optionsRef,
    qty,
  };

  return orderData;
};
