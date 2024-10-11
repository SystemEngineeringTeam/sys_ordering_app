import { Box, Grid } from '@mui/material';

interface Props {
  sendNum: string;
}

const Ordernumbar = (sendNum) => {
  return (
    <Grid alignItems="center" display="flex" flexDirection="column" item justifyContent="center" xs={4}>
      <Box sx={{ fontSize: '20px', textAlign: 'center' }}>ご注文番号</Box>
      <Box sx={{ fontSize: '100px', textAlign: 'center' }}>{sendNum}</Box>
    </Grid>
  );
};

export default Ordernumbar;
