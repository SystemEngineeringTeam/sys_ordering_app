import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { type orderData, type cartData } from '@/types/type';
import { getSum } from '@/utils/getSum';
import { useNavigate } from 'react-router-dom';
import { setOrderCollection } from '@/firebase/useOrderCollection';
import { processingCart } from '@/firebase/setOrder';

interface Props {
  cart: cartData[];
}

const CartListBottom = ({ cart }: Props) => {
  const navigate = useNavigate();
  const SumData = getSum(cart);
  const CartSumPrice = SumData[0];
  const CartSumVal = SumData[1];
  const confirmOrder = (inCartData: cartData[]) => {
    const giveOrderData: orderData[] = processingCart(inCartData);
    navigate('/waitingreceive');
  };
  return (
    <div>
      <Box position="fixed">
        <AppBar color="inherit" enableColorOnDark sx={{ padding: '4%', top: 'auto', bottom: '0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ fontSize: '1.1rem' }}>合計 {CartSumVal}個</Box>
            <Box sx={{ fontSize: '1.7rem' }}>{CartSumPrice}円</Box>
          </Box>
          <Button
            color="warning"
            onClick={() => {
              confirmOrder(cart);
            }}
            sx={{ margin: '3px', fontWeight: 'bold' }}
            variant="contained"
          >
            注文を確定
          </Button>
        </AppBar>
      </Box>
    </div>
  );
};

export default CartListBottom;
