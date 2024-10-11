import ProductAmount from '@/components/product-details/product_amount';
import ProductPicture from '@/components/product-details/product_picture';
import Topping from '@/components/product-details/topping';
import { type cartData, type items, type options } from '@/types/type';
import ProductItems from '@/utils/productItems';
import { Card, CardContent, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';

interface Props {
  itemId: string;
  cardOpen: boolean;
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
  cart: cartData[];
  InCartData: cartData;
  kinds: string;
}

const ItemPopup = ({ itemId, cardOpen, setCardOpen, cart, setCart, InCartData, kinds }: Props) => {
  const [qty, setQty] = useState(InCartData.qty ? InCartData.qty : 1);
  const [price, setPrice] = useState(0);
  const [optionPriceAmount, setOptionPriceAmount] = useState(0);
  const [itemPriceAmount, setItemPriceAmount] = useState(0);
  const [selectOptions, setSelectOptions] = useState<options[]>([]);

  // itemIDに一致するitemの取得
  const currentItem: items | null = ProductItems(itemId);

  // itemのオプションを取得
  const currentOptions: options[] = currentItem?.options ? currentItem.options : [];

  const currentItemPrice = currentItem?.price ? currentItem?.price : 0;

  const cartPush = () => {
    const nowTime = new Date().getTime();
    const itemData: cartData = {
      itemId,
      qty,
      options: selectOptions.map((e) => e.id),
      amountPrice: price,
      timeStamp: nowTime,
    };

    return itemData;
  };

  const handleClose = () => {};
  const iconClose = () => {
    setCardOpen(false);
  };

  return (
    <Dialog fullWidth maxWidth="sm" onClose={handleClose} open={cardOpen}>
      <DialogContent>
        <Card>
          <CardContent>
            {/* Add your ProductPicture, Topping, and ProductAmount components here */}
            <ProductPicture currentItem={currentItem} iconClose={iconClose} />
            <Topping
              currentOptions={currentOptions}
              InCartData={InCartData}
              setOptionPriceAmount={setOptionPriceAmount}
              setSelectOptions={setSelectOptions}
            />
            <ProductAmount
              cart={cart}
              cartPush={cartPush}
              currentItemPrice={currentItemPrice}
              iconClose={iconClose}
              InCartData={InCartData}
              itemPriceAmount={itemPriceAmount}
              kind={kinds}
              onClose={iconClose}
              optionPriceAmount={optionPriceAmount}
              price={price}
              qty={qty}
              setCart={setCart}
              setItemPriceAmount={setItemPriceAmount}
              setPrice={setPrice}
              setQty={setQty}
            />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ItemPopup;
