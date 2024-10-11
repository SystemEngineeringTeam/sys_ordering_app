import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerListCard from './DrawerListCard';
import { type items, type options, type cartData } from '@/types/type';
import { useNavigate } from 'react-router-dom';

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
          <DrawerListCard cart={cart} items={items} options={options} itemId={itemId} cardOpen={cardOpen} setCardOpen={setCardOpen} setCart={setCart} />
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