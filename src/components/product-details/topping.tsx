import { Box, Button } from '@mui/material';
import React from 'react';

const Topping = () => {
  return (
    <>
      <Box sx={{ fontSize: '1.2rem', color: 'gray' }}>トッピング</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box sx={{ flexGrow: 1 }}>チーズ(+100円)</Box>
        <Button variant="outlined" size="small" sx={{ color: 'gray', borderColor: 'gray' }}>なし</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box sx={{ flexGrow: 1 }}>マヨネーズ</Box>
        <Button variant="outlined" size="small" sx={{ color: 'gray', borderColor: 'gray' }}>なし</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box sx={{ flexGrow: 1 }}>ケチャップ</Box>
        <Button variant="outlined" size="small" sx={{ color: 'gray', borderColor: 'gray' }}>なし</Button>
      </Box>
    </>
  )
};

export default Topping;
