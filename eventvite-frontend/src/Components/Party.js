import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import EventInvitation from "./EventInvitation";

export default function Party() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const [selectedEventType, setSelectedEventType] = React.useState("");

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);

    // Update the selectedEventType based on the tab clicked
    switch (tabIndex) {
      case 0:
        setSelectedEventType("Birthday");
        break;
      case 1:
        setSelectedEventType("Wedding");
        break;
      case 2:
        setSelectedEventType("House Warming");
        break;
      case 3:
        setSelectedEventType("Baby Shower");
        break;
      default:
        setSelectedEventType("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: 320, sm: 1500 },
          bgcolor: "background.paper",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            value={currentTabIndex}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              icon={
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Avatar
                    alt="birthday"
                    src="https://cdn-icons-png.flaticon.com/512/4549/4549811.png"
                    sx={{ width: 80, height: 90 }}
                  />
                </motion.div>
              }
            />
            <Tab
              icon={
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Avatar
                    alt="wedding"
                    src="https://media.istockphoto.com/id/1072540494/vector/wedding-rings-icon.jpg?s=612x612&w=0&k=20&c=8g6Kh2hwUqJPW_EXAtPVeEUSNyD-h1GD4EiWc2QtG9g="
                    sx={{ width: 80, height: 90 }}
                  />
                </motion.div>
              }
            />
            <Tab
              icon={
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Avatar
                    alt="house-warming"
                    src="https://media.istockphoto.com/id/1316642892/vector/home-sweet-home-black-and-white-image-of-a-house-with-a-quote.jpg?s=612x612&w=0&k=20&c=BKCCbt5M1INcSkRPQT4SWmIFuG-jrcr_bvgqGFKM-D0="
                    sx={{ width: 80, height: 90 }}
                  />
                </motion.div>
              }
            />
            <Tab
              icon={
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Avatar
                    alt="baby-shower"
                    src="https://cdn-icons-png.flaticon.com/512/8338/8338143.png"
                    sx={{ width: 80, height: 90 }}
                  />
                </motion.div>
              }
            />
          </Tabs>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          {currentTabIndex === 0 && (
            <Box>
              <Typography variant="h5">Birthday</Typography>
              <EventInvitation selectedEventType={selectedEventType} setSelectedEventType={setSelectedEventType} />
            </Box>
          )}
          {currentTabIndex === 1 && (
            <Box>
              <Typography variant="h5">Wedding</Typography>
              <EventInvitation selectedEventType={selectedEventType} setSelectedEventType={setSelectedEventType} />
            </Box>
          )}
          {currentTabIndex === 2 && (
            <Box>
              <Typography variant="h5">House Warming</Typography>
              <EventInvitation selectedEventType={selectedEventType} setSelectedEventType={setSelectedEventType} />
            </Box>
          )}
          {currentTabIndex === 3 && (
            <Box>
              <Typography variant="h5">Baby Shower</Typography>
              <EventInvitation selectedEventType={selectedEventType} setSelectedEventType={setSelectedEventType} />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
