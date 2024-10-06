import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';

const CartListTop = () => {
  return (
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
  );
};

export default CartListTop;
