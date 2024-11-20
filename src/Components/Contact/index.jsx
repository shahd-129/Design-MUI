import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useState } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function Contact() {
  const [warnings, setWarnings] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleBlur = (field) => {
    setWarnings((prev) => ({
      ...prev,
      [field]: prev[field] ? '' : 'This field is required',
    }));
  };

  return (
    <>
      <section id="contact">
        <Box sx={{ margin: '5', padding: '20px' }} position={'relative'}>
          <Typography variant="h3" align="center" sx={{ color: 'inherit', fontWeight: 'bold', margin: 2 }}>
            Contact
          </Typography>

          <Box
            sx={{
              height: '7px',
              width: '100px',
              backgroundColor: '#edcd1f',
              margin: '1rem auto',

            }}
          />

          <Grid container spacing={5} padding={5} sx={{
            padding: { xs: 0, sm: 3, md: 5 },
          }} justifyContent="center">
            <Grid item xs={12} sm={6} md={5}  >
              <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '25px', fontFamily: 'sans-serif', marginBottom: 1 }}>
                Inquiries
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 2,
                  width: '100%',
                  color: '#3b3a3a',
                }}
              >
                For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form
              </Typography>
              <Box >

                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  Contact Us
                </Typography>
                <Box
                  component="form"
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography>First Name</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    onBlur={() => handleBlur('firstName')}
                    sx={{
                      background: '#F7F7F7',
                      width: { xs: '100%', sm: '100%', md: '75%' },
                    }}
                    helperText={warnings.firstName}
                    error={!!warnings.firstName}
                  />

                  <Typography marginTop={1}>Last Name</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    onBlur={() => handleBlur('lastName')}
                    sx={{
                      background: '#F7F7F7',
                      width: { xs: '100%', sm: '100%', md: '75%' },
                    }}
                    helperText={warnings.lastName}
                    error={!!warnings.lastName}
                  />

                  <Typography>Email</Typography>
                  <TextField
                    variant="outlined"
                    onBlur={() => handleBlur('email')}
                    size="small"
                    sx={{
                      background: '#F7F7F7',
                      width: { xs: '100%', sm: '100%', md: '75%' },
                    }}
                    helperText={warnings.email}
                    error={!!warnings.email}
                  />

                  <Typography>Subject</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    onBlur={() => handleBlur('subject')}
                    sx={{
                      background: '#F7F7F7',
                      width: { xs: '100%', sm: '100%', md: '75%' },
                    }}
                    helperText={warnings.subject}
                    error={!!warnings.subject}
                  />

                  <Typography>Message</Typography>
                  <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    onBlur={() => handleBlur('message')}
                    sx={{
                      background: '#F7F7F7',
                      width: { xs: '100%', sm: '100%', md: '75%' },
                    }}
                    helperText={warnings.message}
                    error={!!warnings.message}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      color: '#EDCD1F',
                      backgroundColor: '#3B3A3A',
                      width: '150px',
                      padding: '1rem auto',
                      '&:hover': {
                        backgroundColor: '#EDCD1F',
                        color: '#3B3A3A',
                      },
                    }}
                  >
                    Submit
                  </Button>
                  <Typography sx={{marginTop:"5rem" , color:"#3b3a3a"}}>
                  © 2035 by Sphere Constructions. Powered and secured by Wix
                  </Typography>
                </Box>
              </Box>

            </Grid>

            <Grid item xs={12} sm={6} md={5}>
              <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '25px', fontFamily: 'sans-serif', marginBottom: 1 }}>
                Head Office
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2, color: '#3b3a3a' }}>
                500 Terry Francine Street
                <br />
                San Francisco, CA 94158
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2, color: '#3b3a3a' }}>
                info@mysite.com
                <br />
                Tel: 123-456-7890
                <br />
                Fax: 123-456-7890
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom:{md:"5" , xs:"2"} }}>
                Employment
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2, color: '#3b3a3a' }}>
                To apply for a job with Sphere Constructions, please send a cover letter together with your C.V. to: info@mysite.com
              </Typography>
              <Box
                sx={{
                  width: '64px',
                  height: '10px',
                  backgroundColor: '#edcd1f',
                  margin: '0 0 1rem',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Get a quote: 123-456-7890</Typography>

              <Box sx={{ display: 'flex', justifyContent: {xs:"left", md:'center'} , alignItems: 'center', padding:'2rem auto', marginTop: '1rem' }}>
                <FacebookRoundedIcon sx={{ width: 35, height: 35, borderRadius: '50%', marginRight: '1rem' }} />
                <Avatar sx={{ width: 30, height: 30, borderRadius: '50%', background: 'black', color: 'white' }}>
                  <LinkedInIcon />
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
}
