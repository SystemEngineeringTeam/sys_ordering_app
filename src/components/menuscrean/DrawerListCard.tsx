import { type items, type cartData, type options } from '@/types/type';
import Box from '@mui/material/Box';
import DrawerCardItem from './DrawerCardItem';

interface Props {
  cart: cartData[];
  items: items[];
  options: options[];
}

const CartItemsCard = ({ cart, items, options }: Props) => {
  return (
    <div>
      <Box>
        <Box>
          {cart.map((cartdata) => {
            return <DrawerCardItem InCartData={cartdata} items={items} options={options} />;
          })}
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
