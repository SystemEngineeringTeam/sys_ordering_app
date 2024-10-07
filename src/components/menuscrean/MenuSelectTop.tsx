import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

const MenuSelectTop = () => {
  return (
    <AppBar
      color="inherit"
      enableColorOnDark
      position="sticky"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: '3%',
        borderBottom: '1px solid',
      }}
    >
      <Box>フード</Box>
      <Box>ドリンク</Box>
    </AppBar>
  );
};

export default MenuSelectTop;
