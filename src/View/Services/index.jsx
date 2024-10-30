import { Box, Typography, Grid } from '@mui/material';
import serviceImage1 from '../../assats/9e456adff0ee4a2c847cfd67a62454a3.webp';
import serviceImage2 from '../../assats/b31d0e84cb714761b2b1f06c305023c7.webp';
import serviceImage3 from '../../assats/c19c76_22d8ec47d1484b09a9c333e4141a12a0.webp';
import React from 'react';

export default function Services() {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={5}>
        SERVICES
      </Typography>
      <Box 
        sx={{ 
          height: '7px', 
          width: '100px', 
          backgroundColor: '#edcd1f', 
          margin: '0.5rem auto', 
        }} 
      />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" sx={{ background: "#f7f7f7", width: '85%', margin: '0 auto' }}>
            <Box
              component="img"
              src={serviceImage3}
              alt="Service 3"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                marginBottom: 0,
              }}
            />
            <Box sx={{ background: "#f7f7f7", margin: '0 auto' }}>
              <Typography variant="h4" sx={{ fontSize: "24px", color: "#3d5975", textAlign: 'left', paddingLeft: '1rem' }} mt={2}>
                Preconstruction Planning
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: 'left', color:"#555454", paddingLeft: '1rem' }} mt={2}>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" sx={{ background: "#f7f7f7", width: '85%', margin: '0 auto' }}>
            <Box
              component="img"
              src={serviceImage2}
              alt="Service 2"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                marginBottom: 0,
              }}
            />
            <Box sx={{ background: "#f7f7f7", margin: '0 auto' }}>
              <Typography variant="h4" sx={{ fontSize: "24px", color: "#3d5975", textAlign: 'left', paddingLeft: '1rem' }} mt={2}>
                Architectural Modelling
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: 'left', color:"#555454", paddingLeft: '1rem' }} mt={2}>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" sx={{ background: "#f7f7f7", width: '85%', margin: '0 auto' }}>
            <Box
              component="img"
              src={serviceImage1}
              alt="Service 1"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                marginBottom: 0,
              }}
            />
            <Box sx={{ background: "#f7f7f7", margin: '0 auto' }}>
              <Typography variant="h4" sx={{ fontSize: "24px", color: "#3d5975", textAlign: 'left', paddingLeft: '1rem' }} mt={2}>
                Construction Management
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: 'left', color: "#555454", paddingLeft: '1rem' }} mt={2}>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
