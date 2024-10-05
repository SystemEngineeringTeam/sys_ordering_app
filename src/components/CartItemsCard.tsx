import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';

const CartItemsCard = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '3%', borderBottom: '1px solid #bdbdbd' }}>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ fontSize: '1.2rem', fontWeight: 'Bold' }}>商品１</Box>
            <EditIcon sx={{ marginLeft: '3px' }} />
          </Box>
          <Box sx={{ textAlign: 'right', fontSize: '0.8rem' }}>個数：１</Box>
        </Box>
        <Box sx={{ width: '25%' }}>
          <CardMedia image="./public/img/1.jpg" sx={{ width: '100%', aspectRatio: '1', margin: 'auto' }} title="one" />
          <Box sx={{ textAlign: 'center', fontSize: '1rem' }}>100円</Box>
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
