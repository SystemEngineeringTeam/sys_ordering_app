import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerListCard from './DrawerListCard';
import { type items, type options, type cartData } from '@/types/type';

interface Props {
  cart: cartData[];
  items: items[];
  options: options[];
}

const DrawerList = ({ cart, items, options }: Props) => {
  return (
    <div>
      <Box>
        <Box sx={{ fontSize: '1.1rem', textAlign: 'center', borderBottom: '1px solid #bdbdbd' }}>カート内の商品</Box>
        <Box sx={{ borderBottom: '1px solid #bdbdbd' }}>
          <DrawerListCard cart={cart} items={items} options={options} />
        </Box>
        <Button sx={{ mt: '3%', ml: '5%', fontWeight: 'bold', width: '90%' }} variant="contained" color="warning">
          レジに進む
        </Button>
      </Box>
    </div>
  );
};
export default DrawerList;
