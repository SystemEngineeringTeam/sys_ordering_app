import { items, type cartData } from '@/types/type';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerOptionList from './DrawerOptionList';

interface Props {
  InCartData: cartData;
  Item: items[];
}

const DrawerCardItem = ({ InCartData }: Props) => {
  return (
    <div>
      <Box>
        <Box sx={{ fontSize: '1rem', fontWeight: 'Bold' }}>{InCartData.itemId}</Box>
        {InCartData.options.map((option) => {
          return <DrawerOptionList option={option} />;
        })}
        <Box sx={{ fontSize: '1rem', fontWeight: 'Bold' }}>{InCartData.amountPrice}円</Box>
        <Button sx={{ height: '50%', top: 'auto', bottom: '0' }} variant="outlined" color="warning">
          変更
        </Button>
      </Box>
    </div>
  );
};
export default DrawerCardItem;
