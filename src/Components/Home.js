import React from 'react';
import Header from './Header';
import Party from './Party';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import EventInviation from './EventInvitation';

export default function Home() {
  return (
    <div>
      <Header />
      <Grid container justifyContent="center" alignItems="center">
        {/* Hero Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: 'center',
              backgroundImage:
                'url("https://png.pngtree.com/background/20210709/original/pngtree-pink-flower-plant-floral-background-picture-image_280966.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '40vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2, // padding for small screens
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 600,
                  color: 'black',
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                }}
              >
                Bringing Dreams to Life: Join us for an unforgettable experience!
              </Typography>
            </motion.div>
          </Box>
        </Grid>

        {/* Party Section */}
        <Grid item xs={12} sm={10} md={10}>
          <Party />
          {/* You can uncomment this to show the form */}
          {/* <EventInviation /> */}
        </Grid>
      </Grid>
    </div>
  );
}
