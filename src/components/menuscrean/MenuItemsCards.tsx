import { type items } from '@/types/type';
import { ButtonBase } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface Props {
  cardOpen: boolean;
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: items;
  setSelectItemId: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItemsCards = ({ cardOpen, setCardOpen, item, setSelectItemId }: Props) => {
  const cardOnClick = () => {
    setCardOpen(true);
    setSelectItemId(item.id);
  };
  return (
    <div>
      <ButtonBase onClick={cardOnClick} sx={{ aspectRatio: '1', width: '100%' }}>
        <Card
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>{item.name}</Box>
          <CardMedia
            component="img"
            image={item.imgUrl}
            sx={{ width: '65%', aspectRatio: '1', margin: 'auto' }}
            title="one"
          />
          <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>{item.price}円～</Box>
        </Card>
      </ButtonBase>
    </div>
  );
};
export default MenuItemsCards;
