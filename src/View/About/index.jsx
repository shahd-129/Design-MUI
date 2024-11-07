import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AboutImage from '../../assats/c19c76_427a7bbf62474f74968cb087499c7a3e.webp';
import Counter from "../Counter";

export default function About() {
  return (<>
  <section id='about'>
    <Box width="100%" margin="0">
      <Grid container spacing={0} alignItems="stretch" justifyContent="center">
        
     
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              background: "#f7f7f7",
              padding: '5rem',
              flexGrow: 1,
              objectPosition: '50% 50%',
            }}
          >
            <Typography variant='h3' textAlign="left" mb={1} ml={5} sx={{ lineHeight: 1.5, letterSpacing: '0.05em', fontWeight: "bold" }}>
              ABOUT
            </Typography>
            <Box
              sx={{
                height: '7px',
                width: '100px',
                backgroundColor: '#edcd1f',
                margin: '0 auto 1.5rem 3rem',
              }}
            />
            <Typography variant='body1' sx={{ color: "#3b3a3a", textAlign: 'justify', mx: 5, lineHeight: 1.7, fontSize: "17px", fontFamily: "sans-serif" }}>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. ​This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box
            component="img"
            src={AboutImage}
            alt="About Image"
            sx={{
              width: '100%',
              height: '100%', 
              objectFit: 'cover', 
              display: 'block',
            }}
          />
        </Grid>
      </Grid>
      
      <Counter />
    </Box>

  </section>
  </>

  );
}
