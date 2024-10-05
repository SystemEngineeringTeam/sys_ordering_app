import Box from '@mui/material/Box';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CartItemsCard from './CartItemsCard';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

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
          alignItems: 'center',
          padding: '3%',
          borderBottom: '1px solid',
        }}
      >
        {/* <a onClick={() => this.props.history.goBack()}> */}
        {/* <KeyboardBackspaceIcon /> */}
        {/* </a> */}
        <Box sx={{ fontSize: '1.5rem' }}>ご注文内容の確認</Box>
      </AppBar>
      <CartItemsCard />
      <CartItemsCard />
      <CartItemsCard />
      <CartItemsCard />
      <CartItemsCard />
      <CartItemsCard />
      <CartItemsCard />
      <CartItemsCard />
      <Box position="sticky">
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
