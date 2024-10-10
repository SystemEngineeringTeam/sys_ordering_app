import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { type items, type cartData, type options } from '@/types/type';
import { findItemName } from '@/utils/findItemName';
import { findItemImg } from '@/utils/findItemImg';

interface Props {
  InCartData: cartData;
  items: items[];
  options: options[];
}

const CartItemsCard = ({ InCartData, items, options }: Props) => {
  const itemName = findItemName(InCartData.itemId, items);
  const itemImage = findItemImg(InCartData.itemId, items);
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '3%', borderBottom: '1px solid #bdbdbd' }}>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ fontSize: '1.2rem', fontWeight: 'Bold' }}>{itemName}</Box>
            <IconButton onClick={() => this.props.history.goBack()}>
              <EditIcon sx={{ marginLeft: '3px' }} />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: 'right', fontSize: '0.8rem' }}>個数 : {InCartData.qty}</Box>
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
