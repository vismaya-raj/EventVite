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
  Autocomplete,
} from "@mui/material";
import { useEffect, useState } from "react";

// Event type options and background mappings
const eventTypeOptions = [
  { value: "Birthday" },
  { value: "Wedding" },
  { value: "House Warming" },
  { value: "Baby Shower" },
];

const eventBackgrounds = {
  Birthday: "https://images.greetingsisland.com/images/envelopes/preview/p-envelope81-b.png",
  Wedding: "https://www.pngmart.com/files/6/Hand-drawn-Wedding-Invitation-Background-PNG.png",
  "House Warming": "https://img.freepik.com/free-vector/housewarming-celebration-card-template_23-2148955947.jpg",
  "Baby Shower": "https://img.freepik.com/free-vector/flat-baby-shower-background_23-2148947601.jpg",
};

export default function EventInvitation({ selectedEventType, setSelectedEventType }) {
  const [eventData, setEventData] = useState({
    guestName: "",
    guestEmail: "",
    phone: "",
    eventType: selectedEventType || "",  // Initialize with the selectedEventType prop
    eventDate: "",
    time: "",
    description: "",
  });

  const [guestList, setGuestList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  // Sync eventType with prop selectedEventType whenever it changes
  useEffect(() => {
    if (selectedEventType) {
      setEventData((prev) => ({
        ...prev,
        eventType: selectedEventType,
      }));
    }
  }, [selectedEventType]);

  // Fetch guests for Autocomplete
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/guests");
        const data = await res.json();
        setGuestList(data);
      } catch (err) {
        console.error("Failed to fetch guests:", err);
      }
    };
    fetchGuests();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  // Handle generating the invitation and saving details
  const handleGenerate = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: eventData.guestName,
          email: eventData.guestEmail,
          phone: eventData.phone,
          eventType: eventData.eventType,
          eventDate: eventData.eventDate,
          time: eventData.time,
          description: eventData.description,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert("Backend error: " + data.error || "Unknown error");
        return;
      }

      setOpenDialog(true);
    } catch (err) {
      console.error("Error during fetch:", err);
      alert("Failed to save guest details");
    }
  };

  // Handle closing the dialog
  const handleClose = () => setOpenDialog(false);

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

            <Autocomplete
              freeSolo
              options={guestList}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.name
              }
              value={eventData.guestName}
              onChange={(e, newValue) => {
                if (typeof newValue === "string") {
                  setEventData({
                    ...eventData,
                    guestName: newValue,
                    guestEmail: "",
                    phone: "",
                  });
                } else if (newValue) {
                  setEventData({
                    ...eventData,
                    guestName: newValue.name,
                    guestEmail: newValue.email,
                    phone: newValue.phone,
                  });
                } else {
                  setEventData({
                    ...eventData,
                    guestName: "",
                    guestEmail: "",
                    phone: "",
                  });
                }
              }}
              onInputChange={(event, newInputValue) => {
                setEventData((prev) => ({ ...prev, guestName: newInputValue }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Guest Name" fullWidth />
              )}
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
              onChange={(e) => {
                setEventData({ ...eventData, eventType: e.target.value });
                setSelectedEventType(e.target.value);  // Update the selected event type on change
              }}
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

        <Grid item xs={12} textAlign="center">
          <MuiButton variant="contained" color="primary" onClick={handleGenerate}>
            Generate Invitation
          </MuiButton>
        </Grid>
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
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#800080" }}>
                {eventData.eventType} Invitation
              </Typography>
              <Typography variant="h5" sx={{ fontStyle: "italic", mb: 2, color: "black" }}>
                You're invited, {eventData.guestName}!
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1, color: "black" }}>
                <strong>Date:</strong> {eventData.eventDate}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1, color: "black" }}>
                <strong>Time:</strong> {eventData.time}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500, color: "black" }}>
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
