import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export default function Counter() {
  return (
    <>
      <Box
        sx={{
          background: "#edcd1f",
          position: 'relative',
          padding: "5",
          width: '100%',       
          height: '30vh',       
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:-1
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Typography variant='h3' align="center" sx={{ color: "#3D5975", fontWeight: "bold" }}>
              2035
              <Typography variant='subtitle1' sx={{ fontWeight: "bold", lineHeight: "1.3em" }} align="center">
                Year Established
              </Typography>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Typography variant='h3' align="center" sx={{ color: "#3D5975", fontWeight: "bold" }}>
              206
              <Typography variant='subtitle1' sx={{ fontWeight: "bold" }} align="center">
                Projects Completed
              </Typography>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Typography variant='h3' align="center" sx={{ color: "#3D5975", fontWeight: "bold" }}>
              870
              <Typography variant='subtitle1' sx={{ fontWeight: "bold" }} align="center">
                Contractors Appointed
              </Typography>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Typography variant='h3' align="center" sx={{ color: "#3D5975", fontWeight: "bold" }}>
              26
              <Typography variant='subtitle1' sx={{ fontWeight: "bold" }} align="center">
                Awards Won
              </Typography>
            </Typography>
          </Grid>

          <Box
            sx={{
              position: 'absolute',
              top: '60px',
              left: '25%',
              width: '1px',
              height: '30%',
              background: "#fff",
              display: { xs: 'none', md: 'block' }
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '60px',
              left: '50%',
              width: '1px',
              height: '30%',
              background: "#fff",
              display: { xs: 'none', md: 'block' }
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '60px',
              left: '75%',
              width: '1px',
              height: '30%',
              background: "#fff",
              display: { xs: 'none', md: 'block' }
            }}
          />
        </Grid>
      </Box>
    </>
  );
}
