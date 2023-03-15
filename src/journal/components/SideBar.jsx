import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import TurnedInNot from '@mui/icons-material/TurnedInNot'
import { SideBarItem } from './SideBarItem'

export const SideBar = ({ drawerWidth = 240 }) => {

    const {displayName} = useSelector(state => state.auth)
    const { notes } = useSelector( (state) => state.journal)

  return (
    <Box 
        component='nav'
        color='inherit'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}    
    >
        <Drawer
            variant='permanent'
            open={true}
            
            sx={{ display: { sm: 'block', xs: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>

        <Divider />

        <List>
            {
                notes.map( note => (
                   <SideBarItem key={note.id} {...note} />
                ))
            }
        </List>


        </Drawer>


    </Box>
  )
}
