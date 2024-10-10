import Box from '@mui/material/Box';
import CartItemsCard from './CartItemsCard';
import CartListTop from './CartListTop';
import CartListBottom from './CartListBottom';
import { type cartData, type items, type options } from '@/types/type';
import { useLocation } from 'react-router-dom';

interface State {
  items: items[];
  cart: cartData[];
  options: options[];
}

const CartItemsList = () => {
  const location = useLocation();
  const { items, cart, options } = location.state as State;
  return (
    <div>
      <CartListTop />
      <Box sx={{ pb: '120px' }}>
        <Box>
          {cart.map((cartdata) => {
            return <CartItemsCard key={cartdata.itemId} InCartData={cartdata} items={items} options={options} />;
          })}
        </Box>
      </Box>
      <CartListBottom cart={cart} />
    </div>
  );
};

export default CartItemsList;
