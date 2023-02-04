import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { Typography } from "@mui/material";

const WorkExp = () => {
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
        <Typography variant="h5" gutterBottom component="div">
          Company 1
        </Typography>
        <Controller
          control={control}
          name="company1"
          render={({ field }) => (
            <TextField
              id="company1"
              label="Company"
              variant="outlined"
              placeholder="Enter Company Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <TextField
              id="role"
              label="Role"
              variant="outlined"
              placeholder="Specify your role"
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
              label="Job Description"
              variant="outlined"
              placeholder="Specify Job Description"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Start Date"
          render={({ field }) => (
            <TextField
              id="Startdate"
              label="Start Date"
              variant="outlined"
              placeholder="Enter Your Start Date"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="End Year"
          render={({ field }) => (
            <TextField
              id="Enddate"
              label="End date"
              variant="outlined"
              placeholder="Enter Your End Date"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Typography variant="h5" gutterBottom component="div">
          Company 2
        </Typography>
        <Controller
          control={control}
          name="company1"
          render={({ field }) => (
            <TextField
              id="company1"
              label="Company"
              variant="outlined"
              placeholder="Enter Company Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <TextField
              id="role"
              label="Role"
              variant="outlined"
              placeholder="Specify your role"
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
              label="Job Description"
              variant="outlined"
              placeholder="Specify Job Description"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Start Date"
          render={({ field }) => (
            <TextField
              id="Startdate"
              label="Start Date"
              variant="outlined"
              placeholder="Enter Your Start Date"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="End Year"
          render={({ field }) => (
            <TextField
              id="Enddate"
              label="End date"
              variant="outlined"
              placeholder="Enter Your End Date"
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

export default WorkExp;
