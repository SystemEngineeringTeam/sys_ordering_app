import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerListCard from './DrawerListCard';

const DrawerList = () => {
  return (
    <div>
      <Box sx={{ maxHeight: '60%' }}>
        <Box sx={{ fontSize: '1.1rem', textAlign: 'center', borderBottom: '1px solid #bdbdbd' }}>カート内の商品</Box>
        <DrawerListCard />
        <DrawerListCard />
        <DrawerListCard />
        <Button sx={{ mt: '3%', ml: '5%', fontWeight: 'bold', width: '90%' }} variant="contained" color="warning">
          レジに進む
        </Button>
      </Box>
    </div>
  );
};
export default DrawerList;
