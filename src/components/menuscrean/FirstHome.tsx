import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';

const FirstHome = () => {
  return (
    <div>
      <Box>
        <Box sx={{ backgroundColor: '#BCF2F6' }}>
          <Box sx={{ fontWeight: 'bold', textAlign: 'center' }}>システム工学研究会 模擬店注文サイト</Box>
          <Box sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '2.5rem' }}>syspay</Box>
        </Box>
        <Grid container spacing={2} sx={{ padding: '3%' }}>
          <Grid size={12}>
            <Card>
              <Box>
                <Box sx={{ backgroundColor: 'yellow', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2rem' }}>
                  お知らせ
                </Box>
                <Box>注文確定後に調理を開始します。</Box>
                <Box>ご注文は確実にお受け取りが出来る時間に行うよう、ご協力お願いします。</Box>
              </Box>
            </Card>
          </Grid>
          <Grid size={12}>
            <Box sx={{ textAlign: 'left', fontSize: '1.4rem', fontWeight: 'bold' }}>注文する</Box>
          </Grid>
          <Grid size={12}>
            <Card sx={{ aspectRatio: '1', backgroundColor: 'yellow' }}>
              <Box sx={{ mt: '5%', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>
                制作:システム工学研究会
              </Box>
              <CardMedia
                image="../../../public/img/sysneko.PNG"
                sx={{ width: '100%', aspectRatio: '1', pl: '10%' }}
                title="one"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default FirstHome;
