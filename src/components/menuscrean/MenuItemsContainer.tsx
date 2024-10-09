import Grid from '@mui/material/Grid2';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';
import { type cartData, type category } from '@/types/type';
import { useState } from 'react';

import Grid2 from '@mui/material/Grid2';
import ItemPopup from '@/pages/ItemPopup';

import { useItem } from '@/firebase/useItem';
import { menuItems } from '@/utils/menuItems';

interface Props {
  activeCategory: category;
  cart: cartData[];
}

const MenuItemsContainer = ({ activeCategory, cart }: Props) => {
  const [cardOpen, setCardOpen] = useState(false);
  const Item = useItem();
  const selectItems = menuItems(Item, activeCategory);

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        {selectItems.map((item) => {
          return (
            <Grid size={{ xs: 6, md: 4 }} key={item.id}>
              <MenuItemsCards item={item} />
            </Grid>
          );
        })}

        <MenuItemsBottom cart={cart} Item={Item} />
      </Grid>
    </div>
  );
};

export default MenuItemsContainer;
