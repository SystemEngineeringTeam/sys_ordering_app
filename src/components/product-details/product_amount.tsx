import { Delete, Remove } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useEffect } from 'react';

interface ProductAmountProps {
  onClose: () => void;
  price: number;
  qty: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  currentItemPrice: number;
  optionPriceAmount: number;
  itemPriceAmount: number;
  setItemPriceAmount: React.Dispatch<React.SetStateAction<number>>;
  iconClose: () => void;
}

const ProductAmount = ({
  qty,
  setQty,
  onClose,
  price,
  setPrice,
  currentItemPrice,
  optionPriceAmount,
  itemPriceAmount,
  setItemPriceAmount,
  iconClose,
}: ProductAmountProps) => {
  const itemPrice = currentItemPrice;

  const qtyAdd = () => {
    setQty(qty + 1);
  };

  const qtySubtraction = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      onClose(); // 数量が1の時に減算ボタンが押されたらポップアップを閉じる
    }
  };

  // 商品1個とトッピングの値段を計算
  // const itemOtionPriceAmount = () => {
  //   setItemPriceAmount(itemPrice + optionPriceAmount);
  // }

  useEffect(() => {
    setItemPriceAmount(itemPrice + optionPriceAmount);
  }, [optionPriceAmount]);
  // 商品の値段を計算
  useEffect(() => {
    // itemOtionPriceAmount();
    setPrice(qty * itemPriceAmount);
  }, [qty, itemPriceAmount]);

  return (
    <>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="flex-start"
        spacing={1}
        sx={{ width: '100%', paddingLeft: 2 }}
      >
        <IconButton
          aria-label="subtract"
          onClick={qtySubtraction}
          sx={{
            justifyContent: 'flex-start',
            minWidth: 'auto',
            padding: '6px',
          }}
        >
          {/* 1より大きかったらマイナスのアイコンにする */}
          {qty > 1 ? (
            <Remove sx={{ color: 'gray', fontSize: '28px' }} />
          ) : (
            <Delete sx={{ color: 'gray', fontSize: '28px' }} />
          )}
        </IconButton>
        {/* 商品の個数 */}
        <Box sx={{ fontSize: '20px' }}>{qty}</Box>
        <IconButton
          aria-label="add"
          onClick={qtyAdd}
          sx={{
            justifyContent: 'flex-start',
            minWidth: 'auto',
            padding: '6px',
          }}
        >
          <AddCircleIcon sx={{ color: 'gray', fontSize: '28px' }} />
        </IconButton>
        {/* 商品の値段 */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ fontSize: 25, paddingRight: 5 }}>{price}円</Box>
      </Stack>
      <IconButton
        onClick={iconClose}
        sx={{
          backgroundColor: 'orange',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkorange',
          },
          display: 'block',
          margin: '0 auto',
          marginTop: 2,
          borderRadius: '20px',
          width: '40%',
          maxWidth: '250px',
          padding: '6px 16px',
        }}
      >
        <Box>カートに追加</Box>
      </IconButton>
    </>
  );
};

export default ProductAmount;
