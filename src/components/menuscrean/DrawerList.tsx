import Box from '@mui/material/Box';
import DrawerListCard from './DrawerListCard';

const CartItemsCard = () => {
  return (
    <div>
      <Box sx={{ maxHeight: '60%' }}>
        <Box sx={{ fontSize: '1.1rem', textAlign: 'center', borderBottom: '1px solid #bdbdbd' }}>カート内の商品</Box>
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
      </Box>
    </div>
  );
};
export default CartItemsCard;
