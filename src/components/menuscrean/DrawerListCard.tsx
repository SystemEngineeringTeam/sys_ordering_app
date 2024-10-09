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
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', padding: '3%', borderBottom: '1px solid #bdbdbd' }}
        >
          <Box>
            {cart.map((cartdata) => {
              return <DrawerCardItem InCartData={cartdata} items={items} options={options} />;
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
