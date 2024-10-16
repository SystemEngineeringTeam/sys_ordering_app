import CartItemsCard from './CartItemsCard';
import CartListTop from './CartListTop';
import CartListBottom from './CartListBottom';
import { type cartData, type items, type options } from '@/types/type';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

interface State {
  items: items[];
  cart: cartData[];
  options: options[];
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
}

const CartItemsList = () => {
  const location = useLocation();
  const { items, cart, options, setCart } = location.state as State;
  return (
    <div>
      <CartListTop />
      <Box sx={{ pb: '120px' }}>
        <Box>
          {cart.map((cartdata) => {
            return (
              <CartItemsCard
                key={cartdata.timeStamp}
                cart={cart}
                InCartData={cartdata}
                items={items}
                options={options}
                setCart={setCart}
              />
            );
          })}
        </Box>
      </Box>
      <CartListBottom cart={cart} />
    </div>
  );
};

export default CartItemsList;
