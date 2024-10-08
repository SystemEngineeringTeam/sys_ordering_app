// import Box from '@mui/material/Box';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';
import { category } from '@/types/type';
import { useState } from 'react';
import Grid2 from '@mui/material/Grid2';
import ItemPopup from '@/pages/ItemPopup';

interface Props {
  activeCategory: category;
}

const MenuItemsContainer = ({ activeCategory }: Props) => {
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <div>
      <Grid2 container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        <Grid2 size={{xs:6,md:4}}>
          <MenuItemsCards cardOpen={cardOpen} setCardOpen={setCardOpen}/>
        </Grid2>
        <Grid2 size={{xs:6,md:4}}>
          <MenuItemsCards cardOpen={cardOpen} setCardOpen={setCardOpen}/>
        </Grid2>
        <Grid2 size={{xs:6,md:4}}>
          <MenuItemsCards cardOpen={cardOpen} setCardOpen={setCardOpen}/>
        </Grid2>
      </Grid2>
      <MenuItemsBottom />

      <ItemPopup itemId="2cvlYVy8zF1uB0hci0Hf" cardOpen ={cardOpen} setCardOpen={setCardOpen} />
    </div>
  );
};

export default MenuItemsContainer;
