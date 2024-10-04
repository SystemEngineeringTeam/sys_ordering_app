import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';

const MenuItemsCards = () => {
  return (
    <div>
      <Grid container sx={{ padding: '2%' }}>
        <Card sx={{ width: '42%', aspectRatio: '1', margin: '3%' }}>
          <Box sx={{ textAlign: 'center', fontSize: '1.2rem' }}>商品１</Box>
          <CardMedia image="./public/img/1.jpg" sx={{ width: '65%', aspectRatio: '1', margin: 'auto' }} title="one" />
          <Box sx={{ textAlign: 'center', fontSize: '1.2rem' }}>100円～</Box>
        </Card>
        <Card sx={{ width: '42%', aspectRatio: '1', margin: '3%' }}>
          <Box sx={{ textAlign: 'center', fontSize: '1.2rem' }}>商品２</Box>
          <CardMedia image="./public/img/2.jpg" sx={{ width: '65%', aspectRatio: '1', margin: 'auto' }} title="one" />
          <Box sx={{ textAlign: 'center', fontSize: '1.2rem' }}>200円～</Box>
        </Card>
        <Card sx={{ width: '42%', aspectRatio: '1', margin: '3%' }}>
          <Box sx={{ textAlign: 'center', fontSize: '1.2rem' }}>商品３</Box>
          <CardMedia image="./public/img/3.jpg" sx={{ width: '65%', aspectRatio: '1', margin: 'auto' }} title="one" />
          <Box sx={{ textAlign: 'center', fontSize: '1.2rem' }}>150円～</Box>
        </Card>
      </Grid>
    </div>
  );
};
export default MenuItemsCards;
