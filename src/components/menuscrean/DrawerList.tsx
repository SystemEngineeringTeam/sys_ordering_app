import Box from '@mui/material/Box';
import { type items, type options, type cartData } from '@/types/type';
import CartItemsCard from '../cartscrean/CartItemsCard';
import { useState } from 'react';

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

  const [editDaialogOpen, setEditDaialogOpen] = useState(false);

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
        <Box sx={{ pb: '13.5%', zIndex: 1 }}>
          {cart.map((cartdata) => {
            return (
              <CartItemsCard
                key={cartdata.timeStamp}
                cart={cart}
                InCartData={cartdata}
                items={items}
                options={options}
                setCart={setCart}
                editDaialogOpen={editDaialogOpen}
                setEditDaialogOpen={setEditDaialogOpen}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};
export default DrawerList;
