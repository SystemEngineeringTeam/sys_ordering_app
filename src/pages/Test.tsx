import ProductAmount from '@/components/product-details/product_amount';
import ProductPicture from '@/components/product-details/product_picture';
import Topping from '@/components/product-details/topping';
import { Button, Card, CardContent, Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';

const Test = () => {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [price,setPrice] = useState(1999);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {};
  const iconClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="primary" onClick={handleOpen} variant="contained">
        Open Product
      </Button>

      <Dialog fullWidth maxWidth="sm" onClose={handleClose} open={open}>
        <DialogContent>
          <Card>
            <CardContent>
              {/* Add your ProductPicture, Topping, and ProductAmount components here */}
              <ProductPicture iconClose={iconClose} />
              <Topping />
              <ProductAmount onClose={iconClose} price={price} setPrice={setPrice} qty={qty} setQty={setQty} />
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Test;
