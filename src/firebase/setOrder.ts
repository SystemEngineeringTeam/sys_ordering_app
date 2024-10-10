import { type cartData, type orderData } from '@/types/type';
import { collection, doc } from 'firebase/firestore';
import { db, user } from './firebase';

// 仮置き
const itemData1 = {
  itemId: '1',
  options: ['1', '3'],
  qty: 1,
  amountPrice: 500,
};

const itemData2 = {
  itemId: '2',
  options: ['2', '4'],
  qty: 2,
  amountPrice: 1000,
};

const cart: cartData[] = [itemData1, itemData2];

// 注文情報を作成する関数

// cartを受け取り、orderDat
export const processingCart = (cart: cartData[]) => {
  const orderData = cart.map((item: any) => {
    const orderData = createOrderData(item.itemId, item.options, item.qty);
    return orderData;
  });
  return orderData;
};

// itemID, optionID, qtyを受け取り、orderDataを作成する関数
// itemID, optionID, qtyを受け取り、orderDataを作成する関数
export const createOrderData = (itemId: string, optionId: string[], qty: number) => {
  const itemRef = doc(db, 'shop_user', user.uid, 'item', itemId);

  const optionsRef = optionId.map((id) => {
    return doc(db, 'shop_user', user.uid, 'options', id);
  });

  const orderData: orderData = {
    item: itemRef,
    options: optionsRef,
    qty,
  };

  return orderData;
};
