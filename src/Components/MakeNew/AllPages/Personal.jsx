import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

const Personal = () => {
  const { control } = useFormContext();
  return (
    <Box
      component="form"
      sx={{
        m: "70px",
      }}
      Validate
      autoComplete="on"
    >
      <div>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="name"
              label="Full Name"
              variant="outlined"
              placeholder="Enter Your Full Name"
              fullWidth
              required
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="role"
              label="Role"
              variant="outlined"
              placeholder="Enter Role/ Designation/ Position"
              fullWidth
              required
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Email"
          render={({ field }) => (
            <TextField
              id="email"
              label="EmailId"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              required
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="LinkedIn"
          render={({ field }) => (
            <TextField
              id="linkedin"
              label="Linkedin"
              variant="outlined"
              placeholder="Enter Your LinkedIn Url"
              fullWidth
              required
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Github"
          render={({ field }) => (
            <TextField
              id="Github"
              label="Github"
              variant="outlined"
              placeholder="Enter Your Github Id"
              fullWidth
              required
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Phone"
          render={({ field }) => (
            <TextField
              id="phone"
              label="PhoneNumber"
              variant="outlined"
              placeholder="Enter Your Mobile Number"
              fullWidth
              required
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    </Box>
  );
};

export default Personal;
