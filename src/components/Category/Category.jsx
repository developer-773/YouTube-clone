import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../contants/contants'

export const Category = ({selected, handleSelectCategory}) => {
  return (
    <Stack direction={'row'} sx={{height: "auto", overflowX: "scroll"}}>
        {categories.map(item => (
            <button key={item.name} className="category_btn" style={{background: item.name === selected && "#000", color: item.name === selected && "#fff"}} onClick={() => handleSelectCategory(item.name)}>
                <span>{item.icon}</span>  
                <span>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}
