import { useEffect } from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarOutline from "@mui/icons-material/StarOutline";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";


export const NothingSelectedView = () => {

  const {deleteMessage} = useSelector((state) => state.journal);

  useEffect(() => {
    deleteMessage.length > 0
      ? Swal.fire("Deleted note", deleteMessage, "success")
      : null;
  }, [deleteMessage]);

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 2,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
};
