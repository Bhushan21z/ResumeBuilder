import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const Projects = () => {
  const { control } = useFormContext();
  return (
    <Box
      component="form"
      sx={{
        m: "70px",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Project 1
        </Typography>

        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              placeholder="Enter Your Project Title"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="link"
          render={({ field }) => (
            <TextField
              id="link"
              label="Link"
              variant="outlined"
              placeholder="Github/Website Link/Video/Other"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="info"
          render={({ field }) => (
            <TextField
              id="info"
              label="Description"
              variant="outlined"
              placeholder="Describe your project"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Typography variant="h5" sx={{ mt: 2 }}>
          Project 2
        </Typography>

        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              placeholder="Enter Your Project Title"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="link"
          render={({ field }) => (
            <TextField
              id="link"
              label="Link"
              variant="outlined"
              placeholder="Github/Website Link/Video/Other"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="info"
          render={({ field }) => (
            <TextField
              id="info"
              label="Description"
              variant="outlined"
              placeholder="Describe your project"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    </Box>
  );
};

export default Projects;
