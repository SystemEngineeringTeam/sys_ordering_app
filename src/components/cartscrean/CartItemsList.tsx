import Box from '@mui/material/Box';
import CartItemsCard from './CartItemsCard';
import CartListTop from './CartListTop';
import CartListBottom from './CartListBottom';

const CartItemsList = () => {
  return (
    <div>
      <CartListTop />
      <Box sx={{ pb: '120px' }}>
        <CartItemsCard />
        <CartItemsCard />
      </Box>
      <CartListBottom />
    </div>
  );
};

export default CartItemsList;
