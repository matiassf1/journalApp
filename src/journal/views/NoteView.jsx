import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks";

import { ImageGallery } from "../components";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {

  const dispatch = useDispatch();
  const { active: note, messageSaved } = useSelector((state) => state.journal);

  const { title, body, date, formState, onInputChange } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])
  
  useEffect(() => {
    
    messageSaved.length > 0 
    ? Swal.fire('Updated note', messageSaved, 'success')
    : null

  }, [messageSaved])
  

  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
         {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2, mb: 1 }} onClick={onSaveNote} >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          label="Title"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          name="body"
          value={body}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
