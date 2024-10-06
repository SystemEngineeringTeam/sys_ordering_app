import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';

const CartItemsCard = () => {
  return (
    <div>
      <Box>
        <Box sx={{ textAlign: 'center', borderBottom: '1px solid #bdbdbd' }}>カート内の商品</Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', padding: '3%', borderBottom: '1px solid #bdbdbd' }}
        >
          <Box>
            <Box sx={{ fontSize: '1.1rem', fontWeight: 'Bold' }}>商品１</Box>
            <Box sx={{ textAlign: 'left', fontSize: '0.8rem' }}>オプション１</Box>
            <Box sx={{ textAlign: 'left', fontSize: '0.8rem' }}>オプション２</Box>
            <Box sx={{ textAlign: 'left', fontSize: '0.8rem' }}>オプション３</Box>
          </Box>
          <Button>変更</Button>
          <Box sx={{ width: '25%' }}></Box>
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
