import { FormControl, IconButton, InputBase, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
   <Paper component={"form"} sx={{display: "flex", alignItems: "center" ,width: "62rem", px: "1rem", borderRadius: "21rem", boxShadow: "none", border: "1px solid silver"}}>
   <InputBase sx={{flex: 1, fontSize: "17px"}} placeholder='Search'/>
   <IconButton type='button' sx={{p: "10px"}} ><SearchIcon sx={{width: "2rem", height: "2rem"}}/></IconButton>
   </Paper>
  )
}
