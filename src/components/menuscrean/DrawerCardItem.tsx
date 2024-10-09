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
  return (
    <div>
      <Box sx={{ padding: '3%', borderBottom: '1px solid #bdbdbd' }}>
        <Box sx={{ fontSize: '1rem', fontWeight: 'Bold' }}>{itemName}</Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            {InCartData.options.map((optionId) => {
              return <DrawerOptionList key={optionId} optionId={optionId} options={options} />;
            })}
          </Box>
          <Button sx={{ height: '50%', top: 'auto', bottom: '0' }} variant="outlined" color="warning">
            変更
          </Button>
        </Box>
        <Box sx={{ fontSize: '0.9rem', fontWeight: 'Bold', pl: '5%' }}>{InCartData.amountPrice}円</Box>
      </Box>
    </div>
  );
};
export default DrawerCardItem;
