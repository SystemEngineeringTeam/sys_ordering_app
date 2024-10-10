import { type items, type cartData, type options } from '@/types/type';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerOptionList from './DrawerOptionList';
import { findItemName } from '@/utils/findItemName';
import ItemPopup from '@/pages/ItemPopup';

interface Props {
  InCartData: cartData;
  items: items[];
  options: options[];
  itemId: string;
  cardOpen: boolean;
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
  cart: cartData[];
}


const DrawerCardItem = ({ InCartData, items, options, itemId, cardOpen, setCardOpen, setCart, cart }: Props) => {

  const itemName = findItemName(InCartData.itemId, items);
  const handleChengeClick = () => {
    setCardOpen(true);
  }
  console.log('itemID%%%%%%' + InCartData.itemId);
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
          <Button
            onClick={handleChengeClick}
            sx={{ height: '50%', top: 'auto', bottom: '0' }} variant="outlined" color="warning">
            変更
          </Button>
          <ItemPopup itemId={InCartData.itemId} cardOpen={cardOpen} setCardOpen={setCardOpen} setCart={setCart} cart={cart} InCartData={InCartData} />
        </Box>
        <Box sx={{ fontSize: '0.9rem', fontWeight: 'Bold', pl: '5%' }}>{InCartData.amountPrice}円</Box>
      </Box>
    </div >
  );
};
export default DrawerCardItem;