import { type options } from '@/types/type';
import { findOptionName } from '@/utils/findOptionName';
import Box from '@mui/material/Box';

interface Props {
  optionId: string;
  options: options[];
}

const CartItemOption = ({ optionId, options }: Props) => {
  const optionName = findOptionName(optionId, options);
  return (
    <div>
      <Box>
        <Box sx={{ textAlign: 'left', fontSize: '0.9rem' }}>・{optionName}</Box>
      </Box>
    </div>
  );
};
export default CartItemOption;
