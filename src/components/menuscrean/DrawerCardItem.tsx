import { type items, type cartData, type options } from '@/types/type';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerOptionList from './DrawerOptionList';
import { findItemName } from '@/utils/findItemName';

interface Props {
  InCartData: cartData;
  items: items[];
  options: options[];
}

const DrawerCardItem = ({ InCartData, items, options }: Props) => {
  const itemName = findItemName(InCartData.itemId, items);
  console.log( 'aaa' + InCartData.itemId );
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box>
          <Box sx={{ fontSize: '1rem', fontWeight: 'Bold' }}>{itemName}</Box>
          {InCartData.options.map((optionId) => {
            return <DrawerOptionList optionId={optionId} options={options} />;
          })}
          <Box sx={{ fontSize: '1rem', fontWeight: 'Bold' }}>{InCartData.amountPrice}円</Box>
        </Box>
        <Button sx={{ height: '50%', top: 'auto', bottom: '0' }} variant="outlined" color="warning">
          変更
        </Button>
      </Box>
    </div>
  );
};
export default DrawerCardItem;
