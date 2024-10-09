import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
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
  const Item = useItem();
  const selectItems = menuItems(Item, activeCategory);

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        {selectItems.map((item) => {
          return (
            <Grid size={{xs:6,md:4}} key={item.id}>
              <MenuItemsCards Item={item} />
            </Grid>
          );
        })}

        <MenuItemsBottom />
      </Grid>
    </div>
  );
};

export default MenuItemsContainer;
