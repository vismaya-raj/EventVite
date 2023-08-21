import React from 'react'
import Header from './Header'
import Party from './Party'
import { Box,Grid } from '@mui/material'
import { motion } from "framer-motion";
import EventInviation from './EventInvitation';

export default function Home() {
  return (
//     <div>

//       <Header/>
//       <Box sx={{
//   backgroundColor: "red",
//   width: "600px",
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
 
// }}>
//   <h1>Bringing Dreams to Life: Join us for an unforgettable experience!</h1>
// </Box>
//     <Party/>
//     </div>
//   )
// }

<div>
<Header/>
<Grid container justifyContent="center" alignItems="center">
    <Grid item md={12}>
  
    <Box sx={{
  textAlign: 'center',
  backgroundImage: 'url("https://png.pngtree.com/background/20210709/original/pngtree-pink-flower-plant-floral-background-picture-image_280966.jpg")',
  backgroundSize: 'cover', // Ensure the image covers the entire box
  backgroundPosition: 'center', // Center the image within the box
  minHeight: '40vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
}}>
     <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Bringing Dreams to Life: Join us for an unforgettable experience!</h1>
        </motion.div> 
</Box>


    
      
    </Grid>
    <Grid item md={1} style={{ height: "100%" }}>
   
    
      
    </Grid>
    <Grid item md={10} >
   
      <Party/>
      <EventInviation/>
     
    
      
    </Grid>
    <Grid item md={1} style={{ height: "100%" }}>
    
    
      
    </Grid>
    </Grid>
    
</div>
  )
}
