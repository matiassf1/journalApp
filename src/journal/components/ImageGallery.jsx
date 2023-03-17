import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const ImageGallery = ({ images }) => {
  return (
    <>
      {images?.length > 0 ? (
        <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
          {images?.map((image) => (
            <ImageListItem
              key={image}
              className="animate__animated animate__fadeIn animate__faster"
            >
              <img
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"Imagen de la nota"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Grid
          className="animate__animated animate__fadeIn animate__faster"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{
            minHeight: "calc(100vh - 450px)",
            backgroundColor: "#7180D9",
            borderRadius: 2,
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 90, color: "white" }} />
          <Typography color="white" variant="h4">
            Add some image to your note
          </Typography>
        </Grid>
      )}
    </>
  );
};
