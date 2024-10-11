import { Box, Grid } from '@mui/material';

interface Props {
  selectNum: string;
}

const Ordernumbar = ({ selectNum }: Props) => {
  return (
    <Grid alignItems="center" display="flex" flexDirection="column" item justifyContent="center" xs={4}>
      <Box sx={{ fontSize: '20px', textAlign: 'center' }}>ご注文番号</Box>
      <Box sx={{ fontSize: '100px', textAlign: 'center' }}>{selectNum}</Box>
    </Grid>
  );
};

export default Ordernumbar;
