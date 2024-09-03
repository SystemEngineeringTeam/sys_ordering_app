import { Box, Grid } from '@mui/material'
import React from 'react'

const Precautions = () => {
  return (
    <>
      <Grid item xs={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box sx={{fontSize: "20px", color: "red", textAlign: "center"}}>画面を閉じると注文番号が</Box>
        <Box sx={{fontSize: "20px", color: "red", textAlign: "center"}}>わからなくなります。</Box>
        <Box sx={{fontSize: "20px", color: "red", textAlign: "center"}}>お手数ですがこの画面を</Box>
        <Box sx={{fontSize: "20px", color: "red", textAlign: "center"}}>閉じないでください</Box>
      </Grid>
    </>
  )
}

export default Precautions