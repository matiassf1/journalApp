import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'

import TurnedInNot from '@mui/icons-material/TurnedInNot'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const SideBarItem = ({title, body, id, date, imageUrls=[],  }) => {
    const dispatch = useDispatch()
    console.log('rendered');
    const newTitle = useMemo( () => {
        return title.length > 15 
            ? title.substring(0,15) + '...'
            : title
    }, [title])

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

  return (
    <ListItem disablePadding>
    <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>

        <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={body} />
        </Grid>

    </ListItemButton>
</ListItem>
  )
}
