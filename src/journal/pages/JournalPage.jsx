import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';

import AddOutlined from '@mui/icons-material/AddOutlined  ';

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab voluptate omnis ad fugiat at alias voluptas, similique sunt odio non totam voluptates nostrum blanditiis. Nulla quaerat necessitatibus aliquam quia?</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton size='large' sx={{
        color: 'white',
        backgroundColor: 'add.main',
        ':hover': { backgroundColor: 'add.main', opacity: 0.9  },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}>
        
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
    )
}
