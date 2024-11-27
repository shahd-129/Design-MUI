import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useState } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TitleSection from '../../util/TitleSection';
import SectionContainer from 'Components/Theme/SectionContainer';

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
      <Box id="contact">
        <SectionContainer>

          <Box>
            <TitleSection title={"CONTACT"} />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pt:5
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.445785295115!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1681863129691!5m2!1sen!2sus"
                title="iframe"
                style={{
                  width: "100%",
                  height: "300px",
                  border: "none",
                }}
              />
            </Box>
            <Grid container spacing={8} padding={3}
              justifyContent="center"
              // sx={{margin:0}}
            >
              <Grid item xs={12} sm={6} md={6}  sx={{padding:0 , margin:0}}>
                <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '25px', fontFamily: 'sans-serif', marginBottom: 1 }}>
                  Inquiries
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: 2,
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
                        // width: { xs: '100%', sm: '100%', md: '100%' },
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
                    <Typography sx={{ marginTop: "5rem", color: "#3b3a3a" }}>
                      © 2035 by Sphere Constructions. Powered and secured by Wix
                    </Typography>
                  </Box>
                </Box>

              </Grid>

              <Grid item xs={12} sm={6} md={6} spacing={2}>
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
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: { md: "5", xs: "2" } }}>
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

                <Box sx={{ display: 'flex', justifyContent: { xs: "left", md: 'center' }, alignItems: 'center', padding: '2rem auto', marginTop: '1rem' }}>
                  <FacebookRoundedIcon sx={{ width: 35, height: 35, borderRadius: '50%', marginRight: '1rem' }} />
                  <Avatar sx={{ width: 30, height: 30, borderRadius: '50%', background: 'black', color: 'white' }}>
                    <LinkedInIcon />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SectionContainer>
      </Box>
    </>
  );
}
