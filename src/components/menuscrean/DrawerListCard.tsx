import { items, type cartData } from '@/types/type';
import Box from '@mui/material/Box';
import DrawerCardItem from './DrawerCardItem';

interface Props {
  cart: cartData[];
  Item: items[];
}

const CartItemsCard = ({ cart, Item }: Props) => {
  return (
    <div>
      <Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', padding: '3%', borderBottom: '1px solid #bdbdbd' }}
        >
          <Box>
            {cart.map((cartdata) => {
              return <DrawerCardItem InCartData={cartdata} Item={Item} />;
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
