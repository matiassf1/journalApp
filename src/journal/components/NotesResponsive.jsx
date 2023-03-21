import { useSelector } from 'react-redux'

import { SideBarItem } from './SideBarItem'

import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'


export const NotesResponsive = ( { handleDrawerToggle, drawerWidth, mobileOpen }, props ) => {

    const { window } = props;

    const { notes } = useSelector((state) => state.journal)

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Typography
            variant='h6'
            sx={{ textAlign:'center', my:2 }}
            >
                Notes
            </Typography>
            <Divider/>

            <List className="animate__animated animate__fadeIn animate__faster">
            {
                notes?.map( note => (
                   <SideBarItem key={note?.id} {...note} />
                ))
            }
        </List>

        </Box>
    )

    const container = 
                window !== undefined ? window().document.body : undefined;


  return (
    <Drawer
    container={container}
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true // Better open performance on mobile.
    }}
    sx={{
      display: { xs: "block", sm: "none" },
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth
      }
    }}
  >
    {drawer}
  </Drawer>
  )
}
