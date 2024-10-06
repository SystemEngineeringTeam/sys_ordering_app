import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

const CartListBottom = () => {
  return (
    <div>
      <Box position="fixed">
        <AppBar color="inherit" enableColorOnDark sx={{ padding: '4%', top: 'auto', bottom: '0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ fontSize: '1.1rem' }}>合計２個</Box>
            <Box sx={{ fontSize: '1.7rem' }}>1200円</Box>
          </Box>
          <Button sx={{ margin: '3px', fontWeight: 'bold' }} variant="contained" color="warning">
            注文を確定
          </Button>
        </AppBar>
      </Box>
    </div>
  );
};

export default CartListBottom;
