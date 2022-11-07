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

export const SideBar = ({ drawerWidth = 240 }) => {
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
                    Matias Sfer
                </Typography>
            </Toolbar>

        <Divider />

        <List>
            {
                ["enero", "feb", "marz"].map( text => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>

                            <Grid container>
                                <ListItemText primary={text} />
                                <ListItemText secondary={'hola soy un texto secundario para aprender MaterialUI'} />
                            </Grid>

                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>


        </Drawer>


    </Box>
  )
}
