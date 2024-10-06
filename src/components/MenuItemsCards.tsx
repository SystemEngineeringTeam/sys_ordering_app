import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const MenuItemsCards = () => {
  return (
    <div>
      <Card sx={{ aspectRatio: '1' }}>
        <Box>
          <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>商品１</Box>
          <CardMedia image="./public/img/1.jpg" sx={{ width: '65%', aspectRatio: '1', margin: 'auto' }} title="one" />
          <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>100円～</Box>
        </Box>
      </Card>
    </div>
  );
};
export default MenuItemsCards;
