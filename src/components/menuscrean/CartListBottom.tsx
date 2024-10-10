import React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { type cartData, type orderData } from '@/types/type';
import { getSum } from '@/utils/getSum';
import { setOrderCollection } from '@/firebase/useOrderCollection';
import { processingCart } from '@/firebase/setOrder';
import { useNavigate } from 'react-router-dom';

interface Props {
  cart: cartData[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartListBottom = ({ cart, setOpen }: Props) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  const SumData = getSum(cart);
  const CartSumPrice = SumData[0];
  const CartSumVal = SumData[1];

  const confirmOrder = (inCartData: cartData[]) => {
    const giveOrderData: orderData[] = processingCart(inCartData);
    try {
      void setOrderCollection(giveOrderData);
    } catch (e) {}

    navigate('/waitingreceive');
  };

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
              onClick={() => confirmOrder(cart)}
              sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
              variant="contained"
            >
              注文を確定
            </Button>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
};
export default CartListBottom;
