
import { Box, Typography } from '@mui/material';
import React from 'react';
import video from '../../assats/2818546-uhd_3840_2160_24fps.mp4';


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
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Typography
          variant="h1"
          textAlign="center"
          sx={{ fontSize: '60px', color: 'white', zIndex: -1 }}
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
