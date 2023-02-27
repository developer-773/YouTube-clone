import {Paper, Stack} from "@mui/material"
import { Link } from "react-router-dom"
import { LogoDark } from "../contants/contants"
import {Search} from "../index"
export const Navbar = () => {
    
  return (
   <Stack direction={'row'} alignItems="center" justifyContent={'space-between'} p="3" sx={{position: 'sticky', top: 0, zIndex: 11}}>
    <Link to={"/"}>
    <img src={LogoDark} alt="Logo" width="129" height="75" />
    </Link>
    <Search />
    <Paper variant="span">
      Name
    </Paper>
   </Stack>
  )
}
