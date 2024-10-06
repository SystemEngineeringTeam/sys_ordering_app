import Grid from '@mui/material/Grid2';
// import Box from '@mui/material/Box';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';

const MenuItemsContainer = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
        <Grid size={6}>
          <MenuItemsCards />
        </Grid>
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
      <MenuItemsBottom />
    </div>
  );
};

export default MenuItemsContainer;
