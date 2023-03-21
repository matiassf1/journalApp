import { useSelector } from 'react-redux'

import { SideBarItem } from './SideBarItem'

import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'


export const NotesResponsive = ({ handleDrawerToggle, drawerWidth, mobileOpen }, props) => {

  const { window } = props;

  const { notes } = useSelector((state) => state.journal)

  const drawer = (
    <Box onClick={handleDrawerToggle} display={'flex'} flexDirection='column' gap={3}>
      <Box>
        <Typography
          variant='h6'
          sx={{ textAlign: 'center', my: 2 }}
        >
          Notes
        </Typography>
        <Divider />
      </Box>

      {
        (notes.length > 0)
          ? (<List className="animate__animated animate__fadeIn animate__faster">
            {
              notes?.map(note => (
                <SideBarItem key={note?.id} {...note} />
              ))
            }
          </List>)
          : (<Box display={'flex'} flexDirection='column' justifyContent={'center'} gap={30}>
            <Typography variant='h7' sx={{ textAlign: 'center', my: '10', opacity: 0.7 }} fontWeight={'bold'} >
              You don't have Notes
            </Typography>
            <Typography variant='h7' sx={{ textAlign: 'center', my: '10', opacity: 0.4 }} fontWeight={'bold'} >
              Create Notes and show them here!
            </Typography>
          </Box>)
      }

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
