import { type cartData } from '@/types/type';

export function getSum(Cart: cartData[]) {
  // 空配列の場合は0を返す
  if (Cart.length === 0) {
    return [0, 0];
  }

  const InCartSumPrice = Cart.map((cartData) => cartData.amountPrice);
  const InCartSumItemVal = Cart.map((cartData) => cartData.qty);
  const SumPrice = InCartSumPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
  const ItemVal = InCartSumItemVal.reduce((accumulator, currentValue) => accumulator + currentValue);
  const ReturnData = [SumPrice, ItemVal];

  return ReturnData;
}
