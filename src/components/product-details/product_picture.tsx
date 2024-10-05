import CloseIcon from '@mui/icons-material/Close';
import { Box, Card, CardMedia, IconButton } from '@mui/material';

interface ProductPictureProps {
  iconClose: () => void;
}

const ProductPicture = ({ iconClose }: ProductPictureProps) => {
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
        <Box>唐揚げ</Box>
        <IconButton aria-label="close" onClick={iconClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Card sx={{ maxWidth: '300px', margin: 'auto' }}>
        <CardMedia component="img" height="200" image="/2302_03_karaage_01.jpg" />
      </Card>
    </>
  );
};

export default ProductPicture;
