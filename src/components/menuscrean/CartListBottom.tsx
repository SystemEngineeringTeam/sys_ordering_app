import React, { useState } from 'react';
import { Dialog, Button, styled } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { type cartData } from '@/types/type';
import { getSum } from '@/utils/getSum';
import CheckResult from './CheckResult';

interface Props {
  cart: cartData[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DialogResult = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    position: 'fixed',
    margin: 'auto',
    width: '90%',
    maxWidth: '900px', // 必要に応じて調整
  },
}));

const CartListBottom = ({ cart, setOpen }: Props) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [openResult, setOpenResult] = useState(false);
  const handleClickOpenResult = () => {
    if (cart.length === 0) {
      alert('カートに商品がありません');
      return;
    }

    setOpenResult(true);
  };
  const handleCloseResult = () => {
    setOpenResult(false);
  };

  const SumData = getSum(cart);
  const CartSumPrice = SumData[0];
  const CartSumVal = SumData[1];

  return (
    <div>
      <Box position="fixed">
        <AppBar
          color="inherit"
          enableColorOnDark
          sx={{
            padding: '3%',
            top: 'auto',
            bottom: '0',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <Badge badgeContent={CartSumVal} color="error">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
            <Box sx={{ fontSize: '1.1rem', fontWeight: 'bold', pt: '5px', pl: '10px' }}>{CartSumPrice}円</Box>
          </Box>
          <Button
            color="warning"
            onClick={handleClose}
            sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
            variant="contained"
          >
            メニューに戻る
          </Button>
          <Box>
            <Button
              color="error"
              onClick={handleClickOpenResult}
              sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
              variant="contained"
            >
              注文を確定
            </Button>
            <DialogResult fullWidth onClose={handleCloseResult} open={openResult}>
              <CheckResult cart={cart} setOpenResult={setOpenResult} />
            </DialogResult>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
};
export default CartListBottom;
