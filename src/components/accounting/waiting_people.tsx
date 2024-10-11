import { Box, Grid } from '@mui/material';

const WaitingPeople = () => {
  return (
    <Grid alignItems="center" display="flex" flexDirection="column" item justifyContent="center" xs={4}>
      <Box sx={{ marginBottom: '30px' }}>ご注文が確定しました</Box>
      <Box sx={{ fontSize: '30px' }} />
    </Grid>
  );
};

export default WaitingPeople;
