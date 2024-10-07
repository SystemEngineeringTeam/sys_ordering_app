import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CartItemsCard = () => {
  return (
    <div>
      <Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', padding: '3%', borderBottom: '1px solid #bdbdbd' }}
        >
          <Box>
            <Box sx={{ fontSize: '1rem', fontWeight: 'Bold' }}>商品１</Box>
            <Box sx={{ textAlign: 'left', fontSize: '0.8rem' }}>オプション１</Box>
            <Box sx={{ textAlign: 'left', fontSize: '0.8rem' }}>オプション２</Box>
            <Box sx={{ textAlign: 'left', fontSize: '0.8rem' }}>オプション３</Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '3%',
                borderBottom: '1px solid #bdbdbd',
              }}
            />
            <Box sx={{ fontSize: '1rem', fontWeight: 'Bold' }}>100円</Box>
          </Box>
          <Button sx={{ height: '50%', top: 'auto', bottom: '0' }} variant="outlined" color="warning">
            変更
          </Button>
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
