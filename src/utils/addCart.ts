import { type options_id, type cartData } from '@/types/type';

export function addNewData(
  NewCartData: cartData,
  Cart: cartData[],
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>,
) {
  const NewCart = Cart;
  NewCart.push(NewCartData);
  setCart(NewCart);
}

export function someArrayChecker(arr1: options_id[], arr2: options_id[]) {
  for (let i = 0; i < arr1.length; i += 1) {
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
  NewCartData.options.sort();
  if (Cart.length === undefined) {
    addNewData(NewCartData, Cart, setCart);
    return;
  }
  const InCartItemId = Cart.map((cartData) => cartData.itemId);
  const ItemCheckArr = InCartItemId.filter((itemId) => itemId === NewCartData.itemId);
  if (ItemCheckArr.length === 0) {
    addNewData(NewCartData, Cart, setCart);
    return;
  }
  const SomeNameItems = Cart.filter((cartData) => cartData.itemId === NewCartData.itemId);
  const SomeNameItemsFil = SomeNameItems.filter((cartData) => cartData.options.length === NewCartData.options.length);
  if (SomeNameItemsFil === undefined) {
    addNewData(NewCartData, Cart, setCart);
    return;
  }
  const SomeItemIndex = SomeNameItemsFil.findIndex(
    (cartData) => someArrayChecker(cartData.options, NewCartData.options) === 1,
  );
  if (SomeItemIndex === -1) {
    addNewData(NewCartData, Cart, setCart);
    return;
  }
  const SomeCartDataIndex = Cart.findIndex(
    (cartData) => cartData.timeStamp === SomeNameItemsFil[SomeItemIndex].timeStamp,
  );
  const UpdateCartData: cartData = {
    itemId: Cart[SomeCartDataIndex].itemId,
    options: Cart[SomeCartDataIndex].options,
    qty: Cart[SomeCartDataIndex].qty + NewCartData.qty,
    amountPrice: Cart[SomeCartDataIndex].amountPrice + NewCartData.amountPrice,
    timeStamp: new Date().getTime(),
  };
  Cart[SomeCartDataIndex] = UpdateCartData;
}

export function deleteNewData(
  NewCartData: cartData,
  Cart: cartData[],
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>,
) {
  const NewCart = Cart.filter((cartData) => cartData.timeStamp !== NewCartData.timeStamp);
  setCart(NewCart);
}

export function deleteCart(
  NewCartData: cartData,
  Cart: cartData[],
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>,
) {
  NewCartData.options.sort();
  if (Cart.length === undefined) {
    deleteCart(NewCartData, Cart, setCart);
    return;
  }
  const InCartItemId = Cart.map((cartData) => cartData.itemId);
  const ItemCheckArr = InCartItemId.filter((itemId) => itemId === NewCartData.itemId);
  if (ItemCheckArr.length === 0) {
    deleteCart(NewCartData, Cart, setCart);
    return;
  }
  const SomeNameItems = Cart.filter((cartData) => cartData.itemId === NewCartData.itemId);
  const SomeNameItemsFil = SomeNameItems.filter((cartData) => cartData.options.length === NewCartData.options.length);
  if (SomeNameItemsFil === undefined) {
    deleteCart(NewCartData, Cart, setCart);
    return;
  }
  const SomeItemIndex = SomeNameItemsFil.findIndex(
    (cartData) => someArrayChecker(cartData.options, NewCartData.options) === 1,
  );
  if (SomeItemIndex === -1) {
    deleteCart(NewCartData, Cart, setCart);
    return;
  }
  const SomeCartDataIndex = Cart.findIndex(
    (cartData) => cartData.timeStamp === SomeNameItemsFil[SomeItemIndex].timeStamp,
  );
  const UpdateCartData: cartData = {
    itemId: Cart[SomeCartDataIndex].itemId,
    options: Cart[SomeCartDataIndex].options,
    qty: NewCartData.qty,
    amountPrice: NewCartData.amountPrice,
    timeStamp: new Date().getTime(),
  };
  if (UpdateCartData.qty === 0) {
    deleteNewData(NewCartData, Cart, setCart);
    return;
  }

  Cart[SomeCartDataIndex] = UpdateCartData;
}
