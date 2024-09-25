import { Box, Card, IconButton, CardMedia } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const ProductPicture = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '90%',
          margin: '0 auto',
        }}
      >
        <Box>唐揚げ</Box>
        <IconButton aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <Card sx={{ maxWidth: '300px', margin: 'auto' }}>
        <CardMedia component="img" height="200" image="/2302_03_karaage_01.jpg" />
      </Card>
    </>
  );
};

export default ProductPicture;
