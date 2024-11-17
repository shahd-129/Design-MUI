import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Counter from "../Counter";
import { AboutImage } from '../../assets';

export default function About() {
  return (
    <section id='about'>
      <Box width="100%" margin="0">
        <Grid container spacing={0} alignItems="stretch" justifyContent="center">

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Box
              sx={{
                background: "#f7f7f7",
                padding: { xs: '2rem', sm: '5rem' },
                flexGrow: 1,
                objectPosition: '50% 50%',
              }}
            >
              {/* <Typography 
                variant='h3' 
                textAlign="left" 
                mb={2} 
                // ml={{ xs: 3, sm: 5 }}
                ml={{xs:3 , sm :5 , md:5}}
                sx={{
                  lineHeight: 1.5,
                  letterSpacing: '0.05em',
                  fontWeight: "bold",
                }}
              >
                ABOUT
              </Typography> */}
              <Typography variant='h3' textAlign="left" mb={1} ml={5}
                sx={{
                  lineHeight: 1.5,
                  letterSpacing: '0.05em',
                  fontWeight: "bold"
                }}>
                ABOUT
              </Typography>
              <Box
                ml={{ xs: 2, sm: 5 }}
                sx={{
                  height: '7px',
                  width: '100px',
                  backgroundColor: '#edcd1f',
                  margin: '0 auto 1.5rem',

                }}
              />
              <Typography
                variant='body1'
                sx={{
                  color: "#3b3a3a",
                  textAlign: 'justify',
                  lineHeight: 1.7,
                  fontSize: { xs: "16px", sm: "17px" },
                  fontFamily: "sans-serif",
                  margin: { xs: '0 1rem', sm: '0 5rem' },
                }}
              >
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
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
  );
}






