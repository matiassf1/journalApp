
import { useDispatch, useSelector } from "react-redux";

import { ImageGallery } from "../components";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import SaveOutlined from "@mui/icons-material/SaveOutlined";

export const NoteView = () => {


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
          27 de Agosto, 2023
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2, mb: 1 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
