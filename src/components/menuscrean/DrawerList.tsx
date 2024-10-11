import Box from '@mui/material/Box';
import { type items, type options, type cartData } from '@/types/type';
import CartItemsCard from '../cartscrean/CartItemsCard';

interface Props {
  cart: cartData[];
  items: items[];
  options: options[];
  itemId: string;
  cardOpen: boolean;
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
}

const DrawerList = ({ cart, items, options, itemId, cardOpen, setCardOpen, setCart }: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Box>
        <Box sx={{ fontSize: '1.1rem', textAlign: 'center', borderBottom: '1px solid #bdbdbd' }}>カート内の商品</Box>
        <Box sx={{ borderBottom: '1px solid #bdbdbd' }}>
          <DrawerListCard cart={cart} items={items} options={options} />
        </Box>
        <Button
          sx={{ mt: '3%', ml: '5%', fontWeight: 'bold', width: '90%' }}
          variant="contained"
          color="warning"
          onClick={() => {
            navigate('/createitemlist', { state: { items, cart, options } });
          }}
        >
          レジに進む
        </Button>
      </Box>
    </div>
  );
};
export default DrawerList;
