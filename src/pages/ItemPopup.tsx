import ProductAmount from '@/components/product-details/product_amount';
import ProductPicture from '@/components/product-details/product_picture';
import Topping from '@/components/product-details/topping';
import { items, options, options_id, type cartData } from '@/types/type';
import ProductItems from '@/utils/productItems';
import { Button, Card, CardContent, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';

interface Props {
  itemId: string;
  cardOpen: boolean
  setCardOpen:  React.Dispatch<React.SetStateAction<boolean>>
  setCart:React.Dispatch<React.SetStateAction<cartData[]>>
  cart:cartData[]
}

const ItemPopup = ({ itemId ,cardOpen,setCardOpen, cart,setCart}: Props) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const [optionPriceAmount, setOptionPriceAmount] = useState(0);
  const [itemPriceAmount, setItemPriceAmount] = useState(0);
  const [selectOptions, setSelectOptions] = useState<options_id[]>([]);

  // 商品情報を取得
  const currentItem: items | null = ProductItems(itemId);
  console.log('currentItem:', currentItem);

  // itemのオプションを取得
  const currentOptions: options[] = currentItem?.options ? currentItem.options : [];
  console.log('currentOptions:', currentOptions);

  const currentItemPrice = currentItem?.price ? currentItem?.price : 0;

  const cartPush = () => {
      const nowTime = new Date().getTime();
      const itemData: cartData = {
        itemId: itemId,
        qty: qty,
        options: selectOptions,
        amountPrice: price,
        timeStamp: nowTime,
      };

      console.log('itemData1234'+itemData)
      console.log('timeStamp', itemData.timeStamp);
      return itemData;
  };

  
  const handleClose = () => {};
  const iconClose = () => {
    setCardOpen(false);
  };

  return (
    <>

      <Dialog fullWidth maxWidth="sm" onClose={handleClose} open={cardOpen}>
        <DialogContent>
          <Card>
            <CardContent>
              {/* Add your ProductPicture, Topping, and ProductAmount components here */}
              <ProductPicture currentItem={currentItem} iconClose={iconClose} />
              <Topping
                currentOptions={currentOptions}
                setOptionPriceAmount={setOptionPriceAmount}
                setSelectOptions={setSelectOptions}
                selectOptions={selectOptions}
              />
              <ProductAmount
                cartPush={cartPush}
                currentItemPrice={currentItemPrice}
                iconClose={iconClose}
                itemPriceAmount={itemPriceAmount}
                onClose={iconClose}
                optionPriceAmount={optionPriceAmount}
                price={price}
                qty={qty}
                setItemPriceAmount={setItemPriceAmount}
                setPrice={setPrice}
                setQty={setQty}
                cart = {cart}
                setCart = {setCart}
              />
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ItemPopup;
