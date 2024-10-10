import { type options_id, type cartData } from '@/types/type';

export function addNewData(
  NewCartData: cartData,
  Cart: cartData[],
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>,
) {
  const NewCart = Cart;

  console.dir(`NewCartData78${NewCartData}`, { depth: null });

  NewCart.push(NewCartData);

  console.log(`cartAfter${Cart}`);

  setCart(NewCart);

  console.log(`cart%%${Cart}`);
}

export function someArrayChecker(arr1: options_id[], arr2: options_id[]) {
  for (let i = 0; i < arr1.length; i + 1) {
    if (arr1[i] !== arr2[i]) {
      return 0;
    }
  }
  return 1;
}

export function addCart(
  NewCartData: cartData,
  Cart: cartData[],
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>,
) {
  console.log('NewCartData333', NewCartData);
  NewCartData.options.sort();
  if (Cart.length === 0) {
    addNewData(NewCartData, Cart, setCart);
  }
  const InCartItemId = Cart.map((cartData) => cartData.itemId);
  const ItemCheckArr = InCartItemId.filter((itemId) => itemId === NewCartData.itemId);
  if (ItemCheckArr.length === 0) {
    addNewData(NewCartData, Cart, setCart);
  }
  const SomeNameItems = Cart.filter((cartData) => cartData.itemId === NewCartData.itemId);
  SomeNameItems.filter((cartData) => cartData.options.length === NewCartData.options.length);
  if (SomeNameItems.length === 0) {
    addNewData(NewCartData, Cart, setCart);
    console.log('NewCartData', NewCartData);
  } else {
    console.log('elseNewCartData', NewCartData);
  }
  const SomeItemIndex = SomeNameItems.findIndex(
    (cartData) => someArrayChecker(cartData.options, NewCartData.options) === 1,
  );
  if (SomeItemIndex === undefined) {
    addNewData(NewCartData, Cart, setCart);
  } else {
    const SomeCartDataIndex = Cart.findIndex(
      (cartData) => cartData.timeStamp === SomeNameItems[SomeItemIndex].timeStamp,
    );
    const UpdateCartData: cartData = {
      itemId: Cart[SomeCartDataIndex].itemId,
      options: Cart[SomeCartDataIndex].options,
      qty: Cart[SomeCartDataIndex].qty + NewCartData.qty,
      amountPrice: Cart[SomeCartDataIndex].amountPrice,
      timeStamp: new Date().getTime(),
    };
    Cart[SomeCartDataIndex] = UpdateCartData;
  }
}
