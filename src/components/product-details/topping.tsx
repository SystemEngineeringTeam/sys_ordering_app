import { Box, Button, Stack, Divider } from '@mui/material';
import React from 'react';

const ToppingName = ["チーズ", "マヨネーズ", "ケチャップ"];
const ToppingPrice = [100, 0, 0];
const Topping = () => {
  return (
    <Stack spacing={2} sx={{ maxWidth: '90%', margin: '0 auto' }}>
      <Box sx={{ fontSize: '1.2rem', color: 'gray' }}>トッピング</Box>
      <Stack divider={<Divider />} spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }}>チーズ(+100円)</Box>
          <Button
            size="small"
            sx={{
              bgcolor: 'gray',
              color: 'white',
              borderRadius: '50px',
              '&:hover': { bgcolor: 'darkgray' },
              minWidth: '60px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            variant="contained"
          >
            なし
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }}>マヨネーズ</Box>
          <Button
            size="small"
            sx={{
              bgcolor: 'gray',
              color: 'white',
              borderRadius: '50px',
              '&:hover': { bgcolor: 'darkgray' },
            }}
            variant="contained"
          >
            なし
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }}>ケチャップ</Box>
          <Button
            size="small"
            sx={{
              bgcolor: 'gray',
              color: 'white',
              borderRadius: '50px',
              '&:hover': { bgcolor: 'darkgray' },
            }}
            variant="contained"
          >
            なし
          </Button>
        </Box>
      </Stack>
      <Divider sx={{ borderBottomWidth: 2, borderColor: 'black' }} />
    </Stack>
  );
};

export default Topping;
