import { type cartData } from '@/types/type';

export function getSum(Cart: cartData[]) {
  const InCartSumPrice = Cart.map((cartData) => cartData.amountPrice);
  const InCartSumItemVal = Cart.map((cartData) => cartData.qty);
  const SumPrice = InCartSumPrice.reduce((accumulator, currentValue) => accumulator + currentValue);
  const ItemVal = InCartSumItemVal.reduce((accumulator, currentValue) => accumulator + currentValue);
  const ReturnData = [SumPrice, ItemVal];

  return ReturnData;
}
