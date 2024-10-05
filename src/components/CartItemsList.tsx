import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CartItemsCard from './CartItemsCard';
import Button from '@mui/material/Button';

const CartItemsList = () => {
  return (
    <div>
      <AppBar
        color="inherit"
        enableColorOnDark
        position="sticky"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          padding: '3%',
          borderBottom: '1px solid',
        }}
      >
        <Box sx={{ position: 'absolute', top: '4%', left: '2%' }}>
          <IconButton onClick={() => this.props.history.goBack()}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        </Box>

        <Box sx={{ fontSize: '1.5rem' }}>ご注文内容の確認</Box>
      </AppBar>
      <Box sx={{ pb: '120px' }}>
        <CartItemsCard />
        <CartItemsCard />
        <CartItemsCard />
        <CartItemsCard />
        <CartItemsCard />
        <CartItemsCard />
        <CartItemsCard />
        <CartItemsCard />
      </Box>
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

export default CartItemsList;
