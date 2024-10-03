import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const MenuItemsCards = () => {
  return (
    <div>
      <Card sx={{ height: '300', width: '300' }}>
        <Box>商品１</Box>
        <CardMedia image="./public/img/1.jpg" sx={{ height: '20px', width: '20px' }} title="one" />
        <Box>100円～</Box>
      </Card>
    </div>
  );
};
export default MenuItemsCards;
