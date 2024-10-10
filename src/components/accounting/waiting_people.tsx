import { Box, Grid } from '@mui/material';
import React from 'react';

const WaitingPeople = () => {
  return (
    <Grid alignItems="center" display="flex" flexDirection="column" item justifyContent="center" xs={4}>
      <Box sx={{ marginBottom: '30px' }}>ご注文が確定しました</Box>
      <Box sx={{ fontSize: '30px' }}>待ち人数 4人</Box>
    </Grid>
  );
};

export default WaitingPeople;
