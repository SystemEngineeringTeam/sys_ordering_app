import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';
import { cartData, items, type category } from '@/types/type';
import { useItem } from '@/firebase/useItem';
import { menuItems } from '@/utils/menuItems';
import { Box } from '@mui/material';
import AppLayout from '@/layout/AppLayout';

interface Props {
  activeCategory: category;
}

const MenuItemsContainer = ({ activeCategory }: Props) => {
  const Item = useItem();
  const selectItems = menuItems(Item, activeCategory);

  return (
    <div>
      <AppLayout />
      <Grid container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        {selectItems.map((item) => {
          return (
            <Grid size={6} key={item.id}>
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
