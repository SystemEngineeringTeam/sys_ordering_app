import { Box, Grid } from '@mui/material'
import React from 'react'

const Precautions = () => {
  return (
    <>
      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Box sx={{color: "red"}}>画面を閉じると注文番号が</Box>
        <Box sx={{color: "red"}}>わからなくなります。</Box>
        <Box sx={{color: "red"}}>お手数ですがこの画面を</Box>
        <Box sx={{color: "red"}}>閉じないでください</Box>
      </Grid>
    </>
  )
}

export default Precautions