import * as React from "react";
import { Box, Grid, Stack, TextField, MenuItem } from "@mui/material";

const eventType = [
  {
    value: "Birthday",
  },
  {
    value: "Wedding",
  },
  {
    value: "House Warming",
  },
  {
    value: "Baby Shower",
  },
];

export default function EventInviation() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid md={1}></Grid>
  
        <Grid md={4}>
          <Stack
            component="form"
            sx={{
              width: "50ch",
              bgcolor: "background.paper",
            }}
            spacing={2}
            padding={7}
            noValidate
            autoComplete="off"
          >
            <h4>Host Details</h4>
            <TextField label="Host Name" id="filled-hidden-label-normal" />
            <TextField label="Host Email" id="filled-hidden-label-normal" />
            <TextField label="Phone" id="filled-hidden-label-normal" />
            <TextField label="Location Name" id="filled-hidden-label-normal" />
            <TextField label="Address" id="filled-hidden-label-normal" />
            <TextField label="City" id="filled-hidden-label-normal" />
            <TextField label="State" id="filled-hidden-label-normal" />
          </Stack>
        </Grid>
        <Grid md={4}>
          <Stack
            component="form"
            sx={{
              width: "50ch",
              bgcolor: "background.paper",
            }}
            spacing={2}
            padding={7}
            noValidate
            autoComplete="off"
          >
            <h4>Event Details</h4>
            <TextField
              select
              label="Event Type"
              id="filled-hidden-label-small"
              defaultValue="Small"
              size="Normal"
            >
              {eventType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Event date"
              id="filled-hidden-label-normal"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField label="Time" id="filled-hidden-label-normal" />
          
          </Stack>
        </Grid>
        <Grid md={3}>
          <Box>
            <img src="https://png.pngtree.com/png-vector/20220327/ourmid/pngtree-handdrawn-wedding-envelope-watercolor-floral-png-png-image_4516158.png" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
