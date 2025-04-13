import * as React from "react";
import {
  Box,
  Grid,
  Stack,
  TextField,
  MenuItem,
  Container,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MuiButton,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";

// Event options
const eventTypeOptions = [
  { value: "Birthday" },
  { value: "Wedding" },
  { value: "House Warming" },
  { value: "Baby Shower" },
];

// Background images for event types
const eventBackgrounds = {
  Birthday:
    "https://images.greetingsisland.com/images/envelopes/preview/p-envelope81-b.png",
  Wedding:
    "https://www.pngmart.com/files/6/Hand-drawn-Wedding-Invitation-Background-PNG.png",
  "House Warming":
    "https://img.freepik.com/free-vector/housewarming-celebration-card-template_23-2148955947.jpg",
  "Baby Shower":
    "https://img.freepik.com/free-vector/flat-baby-shower-background_23-2148947601.jpg",
};

export default function EventInvitation() {
  const [eventData, setEventData] = useState({
    guestName: "",
    guestEmail: "",
    phone: "",
    eventType: "",
    eventDate: "",
    time: "",
    description: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" textAlign="center" mb={4}>
        Event Invitation
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Guest Details */}
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Typography variant="h6">Guest Details</Typography>
            <TextField
              label="Guest Name"
              name="guestName"
              value={eventData.guestName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Guest Email"
              name="guestEmail"
              value={eventData.guestEmail}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Phone"
              name="phone"
              value={eventData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
        </Grid>

        {/* Event Details */}
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Typography variant="h6">Event Details</Typography>
            <TextField
              select
              label="Event Type"
              name="eventType"
              value={eventData.eventType}
              onChange={handleChange}
              fullWidth
            >
              {eventTypeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Event Date"
              name="eventDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={eventData.eventDate}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Event Description"
              name="description"
              multiline
              rows={5}
              value={eventData.description}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
        </Grid>

        {/* Generate Button */}
        <Grid item xs={12} textAlign="center">
          <MuiButton variant="contained" color="primary" onClick={handleGenerate}>
            Generate Invitation
          </MuiButton>
        </Grid>

        {/* Envelope Image */}
        {/* <Grid item xs={12} textAlign="center">
          <Box
            component="img"
            sx={{ maxWidth: 300, width: "100%", mt: 4 }}
            src="https://png.pngtree.com/png-vector/20220327/ourmid/pngtree-handdrawn-wedding-envelope-watercolor-floral-png-png-image_4516158.png"
            alt="Envelope"
          />
        </Grid> */}
      </Grid>

      {/* Invitation Card Dialog */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Invitation Card</DialogTitle>
        <DialogContent>
          <Card
            sx={{
              minWidth: 300,
              backgroundImage: `url('${eventBackgrounds[eventData.eventType]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 5,
              boxShadow: 10,
              padding: 4,
              textAlign: "center",
              color: "#fff",
              backdropFilter: "blur(3px)",
              opacity: 0.95,
            }}
          >
            <CardContent sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 2, color: "#f1c40f" }}
              >
                {eventData.eventType} Invitation
              </Typography>

              <Typography variant="h5" sx={{ fontStyle: "italic", mb: 2 }}>
                You're invited, {eventData.guestName}!
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                <strong>Date:</strong> {eventData.eventDate}
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                <strong>Time:</strong> {eventData.time}
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                <strong>Event Details:</strong> {eventData.description}
              </Typography>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleClose}>Close</MuiButton>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
