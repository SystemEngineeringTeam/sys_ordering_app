import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DrawerList from './DrawerList';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import DrawerList from './DrawerList';

const DialogBottom = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    position: 'fixed',
    bottom: 0,
    margin: 0,
    width: '100%',
    maxWidth: '600px', // 必要に応じて調整
  },
}));

const BottomDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box position="fixed">
        <AppBar
          color="inherit"
          enableColorOnDark
          sx={{
            padding: '3%',
            top: 'auto',
            bottom: '0',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <Badge badgeContent={1} color="error">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
            <Box sx={{ fontSize: '1.6rem', fontWeight: 'bold', pt: '5px', pl: '10px' }}>1200円</Box>
          </Box>
          <Button
            sx={{ margin: '3px', fontWeight: 'bold' }}
            variant="contained"
            color="warning"
            variant="contained"
            onClick={handleClickOpen}
          >
            カートを見る
          </Button>
          <DialogBottom open={open} onClose={handleClose} fullWidth>
            <DrawerList />
            <DialogActions>
              <Button
                sx={{ margin: '3px', fontWeight: 'bold' }}
                variant="contained"
                color="warning"
                variant="outlined"
                onClick={handleClose}
                color="primary"
              >
                Close
              </Button>
            </DialogActions>
          </DialogBottom>
        </AppBar>
      </Box>
    </div>
  );
};

export default BottomDialog;
