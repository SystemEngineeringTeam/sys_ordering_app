import Grid from '@mui/material/Grid2';
import MenuItemsCards from './MenuItemsCards';

const MenuItemsContainer = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%' }}>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuItemsContainer;
