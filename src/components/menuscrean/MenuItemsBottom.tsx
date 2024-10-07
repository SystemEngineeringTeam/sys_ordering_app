import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import DrawerList from './DrawerList';

type Anchor = 'bottom';

export default function MenuItemsBottom() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerList />
    </Box>
  );

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
            onClick={toggleDrawer('bottom', true)}
            sx={{ margin: '3px', fontWeight: 'bold' }}
            variant="contained"
            color="warning"
          >
            カートを見る
          </Button>
          <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)} sx={{ marginTop: '40%' }}>
            {list('bottom')}
          </Drawer>
        </AppBar>
      </Box>
    </div>
  );
}
