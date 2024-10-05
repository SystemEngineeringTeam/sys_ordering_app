import { Delete } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';

interface ProductAmountProps {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}

const ProductAmount = ({ qty, setQty }: ProductAmountProps) => {
  const qtyAdd = () => {
    setQty(qty + 1);
  };

  const qtySubtraction = () => {
    setQty(qty - 1);
  };

  return (
    <>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="flex-start"
        spacing={1}
        sx={{ width: '100%', paddingLeft: 2 }}
      >
        <IconButton
          aria-label="subtract"
          onClick={qtySubtraction}
          sx={{
            justifyContent: 'flex-start',
            minWidth: 'auto',
            padding: '6px',
          }}
        >
          <Delete sx={{ color: 'gray', fontSize: '28px' }} />
        </IconButton>
        {/* 商品の個数 */}
        <Box sx={{ fontSize: '20px' }}>{qty}</Box>
        <IconButton
          aria-label="add"
          onClick={qtyAdd}
          sx={{
            justifyContent: 'flex-start',
            minWidth: 'auto',
            padding: '6px',
          }}
        >
          <AddCircleIcon sx={{ color: 'gray', fontSize: '28px' }} />
        </IconButton>
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
