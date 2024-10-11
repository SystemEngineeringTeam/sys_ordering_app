import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';

const FirstHome = () => {
  return (
    <div>
      <Box>
        <Box sx={{ backgroundColor: '#84ffff', padding: '20px' }}>
          <img
            alt="logo"
            className="logo"
            height="10%"
            src="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fbatch_SysPay.PNG?alt=media&token=6bf3c4b2-efc0-4694-9d52-814a99421a3c"
            width="100%"
          />
        </Box>
        <Grid container spacing={2} sx={{ padding: '3%' }}>
          <Grid size={12}>
            <Box sx={{ display: 'flex' }}>
              <Box
                height={40}
                sx={{ borderRadius: '50%', background: '#e0f7fa', position: 'relative' }}
                width={40}
                zIndex={1}
              />
              <Box
                sx={{ fontSize: '1.3rem', fontWeight: 'bold', position: 'relative', left: '-7%', pt: '2%' }}
                zIndex={2}
              >
                お知らせ
              </Box>
            </Box>
            <Box sx={{ ml: '1rem' }}>
              <Box sx={{ fontWeight: 'bold' }}>注文確定後に調理を開始します。</Box>
              <Box sx={{ fontWeight: 'bold' }}>
                ご注文は<span style={{ color: 'orange' }}>確実にお受け取りが出来る時間に行うよう</span>
                、ご協力をお願いします。
              </Box>
            </Box>
          </Grid>
          <Grid size={12}>
            <Box sx={{ display: 'flex' }}>
              <Box
                height={40}
                sx={{ borderRadius: '50%', background: '#e0f7fa', position: 'relative' }}
                width={40}
                zIndex={1}
              />
              <Box
                sx={{ fontSize: '1.3rem', fontWeight: 'bold', position: 'relative', left: '-7%', pt: '2%' }}
                zIndex={2}
              >
                当ページについて
              </Box>
            </Box>
            <Box sx={{ ml: '1rem' }}>
              <Box color="orange" sx={{ fontWeight: 'bold' }}>
                再ローディングを実行しないでください。
              </Box>
              <Box sx={{ fontWeight: 'bold' }}>カート情報は保存されず、リセットされます。</Box>
            </Box>
          </Grid>
          <Grid size={12}>
            <Box sx={{ display: 'flex' }}>
              <Box
                height={40}
                sx={{ borderRadius: '50%', background: '#e0f7fa', position: 'relative' }}
                width={40}
                zIndex={1}
              />
              <Box
                sx={{ fontSize: '1.3rem', fontWeight: 'bold', position: 'relative', left: '-7%', pt: '2%' }}
                zIndex={2}
              >
                お支払い・お受け取りについて
              </Box>
            </Box>
            <Box sx={{ ml: '1rem' }}>
              <Box sx={{ fontWeight: 'bold' }}>注文確定時、注文番号が表示されます。</Box>
              <Box sx={{ fontWeight: 'bold' }}>
                <span style={{ color: 'orange' }}>会計時に必要となります</span>ので、ページを閉じずにお待ちください。
              </Box>
            </Box>
          </Grid>
          <Grid size={12}>
            <Card sx={{ aspectRatio: '1', backgroundColor: '#ffee33' }}>
              <Box sx={{ mt: '5%', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>
                制作:システム工学研究会
              </Box>
              <CardMedia
                image="https://firebasestorage.googleapis.com/v0/b/sys-pay.appspot.com/o/images%2Fsysneko.PNG?alt=media&token=856751cb-52bc-4305-8f50-07e2e1c9e089"
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
