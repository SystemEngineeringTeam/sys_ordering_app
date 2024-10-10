import { type items } from '@/types/type';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Card, CardMedia, IconButton } from '@mui/material';

interface ProductPictureProps {
  iconClose: () => void;
  currentItem: items | null;
}

const ProductPicture = ({ iconClose, currentItem }: ProductPictureProps) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '90%',
          margin: '0 auto',
        }}
      >
        {/* 商品名の追加 */}
        <Box>{currentItem?.name}</Box>
        <IconButton aria-label="close" onClick={iconClose} >
          <CloseIcon />
        </IconButton>
      </Box>
      <Card sx={{ maxWidth: '300px', margin: 'auto' }}>
        <CardMedia component="img" height="200" image={currentItem?.imgUrl} />
      </Card>
    </>
  );
};

export default ProductPicture;
