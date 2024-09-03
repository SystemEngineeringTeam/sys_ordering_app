import { Box, Grid } from '@mui/material'
import React from 'react'

const Ordernumbar = () => {
  return (
    <>
    <Grid item xs={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    <Box sx={{fontSize: "20px", textAlign: "center"}}>ご注文番号</Box>
    <Box sx={{fontSize: "100px", textAlign: "center"}}>132</Box>
    </Grid>
    </>
  )
}

export default Ordernumbar