import { type items } from '@/types/type';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface MenuItemsCardsProps {
  Item: items;
}

const MenuItemsCards = ({ Item }: MenuItemsCardsProps) => {
  return (
    <div>
      <Card sx={{ aspectRatio: '1' }}>
        <Box>
          <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>{Item.name}</Box>
          <CardMedia image={Item.imgUrl} sx={{ width: '65%', aspectRatio: '1', margin: 'auto' }} title="one" />
          <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>{Item.price}円～</Box>
        </Box>
      </Card>
    </div>
  );
};
export default MenuItemsCards;
