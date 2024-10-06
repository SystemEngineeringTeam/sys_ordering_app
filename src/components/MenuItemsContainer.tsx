import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';
import SwipeCartList from './SwipeCartList';

const MenuItemsContainer = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%', pb: '105px' }}>
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
      <Box sx={{ zIndex: '1', position: 'relative', mb: '100px' }}>
        <SwipeCartList />
      </Box>
      <Box sx={{ zIndex: '2', position: 'absolute' }}>
        <MenuItemsBottom />
      </Box>
    </div>
  );
};

export default MenuItemsContainer;
