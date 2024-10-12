import { processingCart } from '@/firebase/setOrder';
import { setOrderCollection } from '@/firebase/useOrderCollection';
import { type orderData, type cartData } from '@/types/type';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  cart: cartData[];
  setOpenResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckResult = ({ cart, setOpenResult }: Props) => {
  const [selectNum, setSelectNum] = useState(0);

  const navigate = useNavigate();

  // numが入ったら画面遷移
  useEffect(() => {
    if (selectNum !== 0) {
      navigate('/waitingreceive', { state: { selectNum: selectNum } });
    }
  }, [selectNum]);

  const handleCloseResult = () => {
    setOpenResult(false);
  };
  const confirmOrder = (inCartData: cartData[]) => {
    const giveOrderData: orderData[] = processingCart(inCartData);

    try {
      setOrderCollection(giveOrderData, setSelectNum);
    } catch (e) {}
  };

  return (
    <div>
      <Box sx={{ padding: '1%', backgroundColor: 'orange' }}>
        <Box sx={{ padding: '5%', backgroundColor: 'white' }}>
          <Box sx={{ textAlign: 'center' }}>
            注文確定後、
            <br />
            支払い待ちリストに追加されます。
          </Box>
          <Box sx={{ textAlign: 'center' }}>注文を確定します。よろしいですか？</Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '3%' }}>
            <Button
              color="warning"
              onClick={handleCloseResult}
              sx={{ fontWeight: 'bold', margin: '2%' }}
              variant="contained"
            >
              カートに戻る
            </Button>
            <Button
              color="error"
              onClick={() => {
                confirmOrder(cart);
              }}
              sx={{ fontWeight: 'bold', margin: '2%' }}
              variant="contained"
            >
              注文を確定
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default CheckResult;
