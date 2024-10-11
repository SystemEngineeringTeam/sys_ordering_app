import ItemPopup from '@/pages/ItemPopup';
import { type cartData, type items, type options } from '@/types/type';
import { findItemImg } from '@/utils/findItemImg';
import { findItemName } from '@/utils/findItemName';
import EditIcon from '@mui/icons-material/Edit';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import CartItemOption from './CartItemOption';
import Box from '@mui/material/Box';

interface Props {
  InCartData: cartData;
  items: items[];
  options: options[];
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
  cart: cartData[];
}

const CartItemsCard = ({ InCartData, items, options, setCart, cart }: Props) => {
  const [editDaialogOpen, setEditDaialogOpen] = useState(false);
  const itemName = findItemName(InCartData.itemId, items);
  const itemImage = findItemImg(InCartData.itemId, items);

  const handleChengeClick = () => {
    console.log('変更！！！');
    console.log(`itemID%う５雨１５${InCartData.itemId}`);
    console.log(`cart###${cart}`);

    setEditDaialogOpen(true);
  };

  useEffect(() => {
    console.log('cartが変わった');
  }, [cart]);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pl: '3%',
          pr: '3%',
          pt: '1%',
          pb: '1%',
          borderBottom: '1px solid #bdbdbd',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ fontSize: '1.2rem', fontWeight: 'Bold', justifyContent: 'center' }}>
              <Box sx={{ margin: 'auto', mt: '6px', mb: '6px' }}>{itemName}</Box>
            </Box>
            <IconButton onClick={handleChengeClick}>
              <EditIcon sx={{ marginLeft: '3px' }} />
            </IconButton>
            <ItemPopup
              cardOpen={editDaialogOpen}
              cart={cart}
              InCartData={InCartData}
              itemId={InCartData.itemId}
              kinds="edit"
              setCardOpen={setEditDaialogOpen}
              setCart={setCart}
            />
          </Box>
          <Box>
            {InCartData.options.map((optionId) => {
              return <CartItemOption key={optionId} optionId={optionId} options={options} />;
            })}
          </Box>
          <Box sx={{ textAlign: 'right', fontSize: '0.9rem' }}>個数 : {InCartData.qty}</Box>
        </Box>
        <Box sx={{ width: '25%' }}>
          <CardMedia image={itemImage} sx={{ width: '100%', aspectRatio: '1', margin: 'auto' }} title="one" />
          <Box sx={{ textAlign: 'center', fontSize: '1rem' }}>{InCartData.amountPrice}円</Box>
        </Box>
      </Box>
    </div>
  );
};
export default CartItemsCard;
