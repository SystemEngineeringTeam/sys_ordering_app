import Box from '@mui/material/Box';
import { type items, type options, type cartData } from '@/types/type';
import CartItemsCard from '../cartscrean/CartItemsCard';

interface Props {
  cart: cartData[];
  items: items[];
  options: options[];
}

const DrawerList = ({ cart, items, options }: Props) => {
  return (
    <div>
      <Box>
        <Box
          component="div"
          position="sticky"
          sx={{
            fontSize: '1.5rem',
            textAlign: 'center',
            borderBottom: '1px solid #bdbdbd',
            backgroundColor: '#fff',
            top: 0,
            zIndex: 2,
          }}
        >
          ご注文内容の確認
        </Box>
        <Box sx={{ pb: '50px', zIndex: 1 }}>
          {cart.map((cartdata) => {
            return <CartItemsCard key={cartdata.timeStamp} InCartData={cartdata} items={items} options={options} />;
          })}
        </Box>
      </Box>
    </div>
  );
};
export default DrawerList;