import {Videos} from "../index"
import { Box, Stack, Typography } from '@mui/material'

import React, { useState } from 'react'
import { Category } from '../Category/Category'

export const Main = () => {
  const [selected, setSelectedCategory] = useState("All")

  const handleSelectCategory = category => setSelectedCategory(category)
  return (
   <Stack>
    <Category selected={selected} handleSelectCategory={handleSelectCategory}/>
    <Box p="2" sx={{height: "90vh"}} >
      <Typography variant='p' fontWeight={"bold"}>
      {selected} <span style={{color: "#000"}}>videos</span>
      </Typography>
      <Videos />
    </Box>
   </Stack>
  )
}
