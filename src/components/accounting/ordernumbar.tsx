import { Box, Grid } from '@mui/material';
import React from 'react';

const Ordernumbar = () => {
  return (
    <Grid alignItems="center" display="flex" flexDirection="column" item justifyContent="center" xs={4}>
      <Box sx={{ fontSize: '20px', textAlign: 'center' }}>ご注文番号</Box>
      <Box sx={{ fontSize: '100px', textAlign: 'center' }}>132</Box>
    </Grid>
  );
};

export default Ordernumbar;
