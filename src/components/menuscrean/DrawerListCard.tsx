import { type items, type cartData, type options } from '@/types/type';
import Box from '@mui/material/Box';
import DrawerCardItem from './DrawerCardItem';

interface Props {
  cart: cartData[];
  items: items[];
  options: options[];
  itemId: string;
  cardOpen: boolean;
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
}

const CartItemsCard = ({ cart, items, options, itemId, cardOpen, setCardOpen, setCart }: Props) => {
  return (
    <div>
      <Box>
        <Box>
          {cart.map((cartdata) => {
            return (
              <Box key={cartdata.timeStamp}>
                <DrawerCardItem InCartData={cartdata} items={items} options={options} itemId={itemId} cardOpen={cardOpen} setCardOpen={setCardOpen} setCart={setCart} cart={[]} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
