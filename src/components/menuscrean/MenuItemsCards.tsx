import { ButtonBase } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';

interface Props{
  cardOpen: boolean
  setCardOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

const MenuItemsCards = ({cardOpen, setCardOpen}: Props) => {

  const cardOnClick = () => {
    setCardOpen(true);
  }
  return (
    <div>
      <ButtonBase onClick={cardOnClick} sx={{ aspectRatio: '1', width: '100%' }}>
          <Card sx={{ width:'100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>商品１</Box>
            <CardMedia
              component="img"
              image="./public/img/1.jpg"
              sx={{ width: '65%', aspectRatio: '1', margin: 'auto' }}
              title="one"
            />
            <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>100円～</Box>
          </Card>
        </ButtonBase>






    </div>
  );
};
export default MenuItemsCards;
