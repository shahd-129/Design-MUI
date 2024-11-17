
import { Box, Typography } from '@mui/material';
import React from 'react';
import {HomeImage} from '../../assets';


export default function Home() {

  return (
    <>
    <section id='home'>

      <Box 
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={HomeImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Typography
          variant="h1"
          textAlign="center"
          sx={{ color: 'white', zIndex: -1
            ,  fontSize: { xs: '40px', sm: '50px', md: '60px' },
           }}
          
        >
          LEADERS IN QUALITY
          <br />
          CONSTRUCTION AND
          <br />
          INFRASTRUCTURE
        </Typography>
      </Box>
    </section>
    </>
  );
}
