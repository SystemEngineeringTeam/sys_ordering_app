import { Delete } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';

const ProductAmount = () => {
  return (
    <>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="flex-start"
        spacing={1}
        sx={{ width: '100%', paddingLeft: 2 }}
      >
        <Delete sx={{ color: 'gray', fontSize: '28px' }} />
        <Box sx={{ fontSize: '20px' }}>1</Box>
        <Button
          sx={{
            justifyContent: 'flex-start',
            minWidth: 'auto',
            padding: '6px',
          }}
        >
          <AddCircleIcon sx={{ color: 'gray', fontSize: '28px' }} />
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ fontSize: 25, paddingRight: 5 }}>9,999円</Box>
      </Stack>
      <Button
        sx={{
          backgroundColor: 'orange',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkorange',
          },
          display: 'block',
          margin: '0 auto',
          marginTop: 2,
          borderRadius: '20px',
          width: '40%',
          maxWidth: '250px',
          padding: '6px 16px',
        }}
      >
        <Box>カートに追加</Box>
      </Button>
    </>
  );
};

export default ProductAmount;
