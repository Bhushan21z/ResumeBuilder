import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

const Achievements = () => {
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
        <Controller
          control={control}
          name="Achievement1"
          render={({ field }) => (
            <TextField
              id="achievement1"
              label="Name of the Achievement"
              variant="outlined"
              placeholder="Enter Your Achievement"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="certificate1"
          render={({ field }) => (
            <TextField
              id="certificate1"
              label="Certificate"
              variant="outlined"
              placeholder="Certificate Link"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Achievement2"
          render={({ field }) => (
            <TextField
              id="achievement2"
              label="Name of the Achievement"
              variant="outlined"
              placeholder="Enter Your Achievement"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="certificate2"
          render={({ field }) => (
            <TextField
              id="certificate2"
              label="Certificate"
              variant="outlined"
              placeholder="Certificate Link"
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

export default Achievements;
