import { Box, Card, IconButton, CardMedia } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'

const Product_picture = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>唐揚げ</Box>
        <IconButton aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="/karaage.jpg"

        />
      </Card>
    </>
  )
}

export default Product_picture