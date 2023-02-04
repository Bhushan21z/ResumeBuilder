import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { Typography } from "@mui/material";

const Education = () => {
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
        {/* ------------------------------------- college--------------------------------------- */}
        <Typography variant="h5" gutterBottom component="div">
          School
        </Typography>

        <Controller
          control={control}
          name="Name of the institution"
          render={({ field }) => (
            <TextField
              id="school"
              label="school"
              variant="outlined"
              placeholder="Enter Your Institution Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Certificate/Degree"
          render={({ field }) => (
            <TextField
              id="degree"
              label="degree"
              variant="outlined"
              placeholder="Enter Your Degree"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="City"
          render={({ field }) => (
            <TextField
              id="City"
              label="City"
              variant="outlined"
              placeholder="Enter City "
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Start Year"
          render={({ field }) => (
            <TextField
              id="StartYear"
              label="Start Year"
              variant="outlined"
              placeholder="Enter Your Start Year"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Passing Year"
          render={({ field }) => (
            <TextField
              id="PassingYear"
              label="Passing Year"
              variant="outlined"
              placeholder="Enter Your Passing Year"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        {/* ------------------------------------- College--------------------------------------- */}

        <Typography variant="h5" sx={{ mt: 2 }}>
          College / University
        </Typography>

        <Controller
          control={control}
          name="Name of the institution"
          render={({ field }) => (
            <TextField
              id="college"
              label="College"
              variant="outlined"
              placeholder="Enter Your College Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Degree"
          render={({ field }) => (
            <TextField
              id="degree"
              label="degree"
              variant="outlined"
              placeholder="Enter Your Degree"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="City"
          render={({ field }) => (
            <TextField
              id="City"
              label="City"
              variant="outlined"
              placeholder="Enter City "
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Start Year"
          render={({ field }) => (
            <TextField
              id="StartYear"
              label="Start Year"
              variant="outlined"
              placeholder="Enter Your Start Year"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Passing Year"
          render={({ field }) => (
            <TextField
              id="PassingYear"
              label="Passing Year"
              variant="outlined"
              placeholder="Enter Your Passing Year"
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

export default Education;
