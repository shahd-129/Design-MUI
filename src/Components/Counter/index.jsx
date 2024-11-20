import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

export default function Counter() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: '20px',
          background: theme.palette.primary.main,
          width: '100%',
          marginBottom: '0.1rem',
          display: { xs: 'block', sm: 'block', md: 'none' },
        }}
      />
      <Box
        sx={{
          background: "#edcd1f",
          position: 'relative',
          width: '100%',
          minHeight: { xs: '30vh', md: '30vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: -1,
          padding: { xs: '1rem 0.5rem', sm: '1rem', md: '2rem' },
        }}
      >
        <Grid
          container
          maxWidth='md'
          spacing={{ xs: 3, md: 1 }}
          alignItems="center"
        >
          {[
            { value: 2035, labelTop: 'Year', labelBottom: 'Established' },
            { value: 206, labelTop: 'Projects', labelBottom: 'Completed' },
            { value: 870, labelTop: 'Contractors', labelBottom: 'Appointed' },
            { value: 26, labelTop: 'Awards', labelBottom: 'Won' },
          ].map((item, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                padding: { xs: '0.25rem', md: '0.5rem' },
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{
                  color: theme.palette.typography.colorTypography,
                  fontWeight: 'bold',
                  lineHeight: { xs: '1.2', md: '5rem' },
                  marginBottom: { xs: '0.3rem', md: '0.1rem' },
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                }}
              >
                {item.value}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  // gap: { md: '0.2rem' },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 'bold',
                    lineHeight: '1.2em',
                    color: theme.palette.typography.colorTypography,
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.375rem' },
                  }}
                  align="center"
                >
                  {item.labelTop}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 'bold',
                    lineHeight: '1.2em',
                    color: theme.palette.typography.colorTypography,
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.375rem' },
                  }}
                  align="center"
                >
                  {item.labelBottom}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

         {[33, 50, 67].map((left) => (
          <Box
            key={left}
            sx={{
              position: 'absolute',
              top: '60px',
              left: {md: `${left}%` , sm:"50%"},
              width: '1px',
              height: '30%',
              background: '#fff',
              display: { xs: 'none', md: 'block' , sm:"none" },
            }}
          /> ))} 

      </Box>
    </>
  );
}