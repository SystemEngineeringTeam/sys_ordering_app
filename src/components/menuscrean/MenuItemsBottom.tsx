import { useState } from 'react';
import { Dialog, DialogActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DrawerList from './DrawerList';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { type items, type options, type cartData } from '@/types/type';
import { getSum } from '@/utils/getSum';
import CartListBottom from './CartListBottom';

interface Props {
  items: items[];
  options: options[];
  itemId: string;
  cardOpen: boolean;
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
  cart: cartData[];
}

const DialogBottom = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    position: 'fixed',
    bottom: 0,
    margin: 0,
    width: '100%',
    maxWidth: '900px', // 必要に応じて調整
  },
}));

const MenuItemsBottom = ({ items, options, itemId, cardOpen, setCardOpen, setCart, cart }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SumData = getSum(cart);
  const CartSumPrice = SumData[0];
  const CartSumVal = SumData[1];

  return (
    <div>
      <Box position="fixed">
        <AppBar
          color="inherit"
          enableColorOnDark
          sx={{
            padding: '3%',
            top: 'auto',
            bottom: '0',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <Badge badgeContent={CartSumVal} color="error">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
            <Box sx={{ fontSize: '1.6rem', fontWeight: 'bold', pt: '5px', pl: '10px' }}>{CartSumPrice}円</Box>
          </Box>
          <Button
            color="warning"
            onClick={handleClickOpen}
            sx={{ margin: '3px', fontWeight: 'bold' }}
            variant="contained"
          >
            カートを見る
          </Button>
          <DialogBottom fullWidth onClose={handleClose} open={open}>
            <DrawerList
              cardOpen={cardOpen}
              cart={cart}
              itemId={itemId}
              items={items}
              options={options}
              setCardOpen={setCardOpen}
              setCart={setCart}
            />
            <DialogActions>
              <CartListBottom cart={cart} setOpen={setOpen} />
            </DialogActions>
          </DialogBottom>
        </AppBar>
      </Box>
    </div>
  );
};

export default MenuItemsBottom;
