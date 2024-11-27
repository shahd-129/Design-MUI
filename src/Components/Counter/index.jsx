import { Box, Grid, Typography, useTheme } from '@mui/material';
import SectionContainer from 'Components/Theme/SectionContainer';
import React from 'react';

export default function Counter() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: '20px',
          bgcolor: 'primary.main',
          width: '100%',
          marginBottom: '0.1rem',
          display: { xs: 'block', sm: 'block', md: 'none' },
        }} />
      <Box
        sx={{
          bgcolor: 'secondary.main',
          position: 'relative',
          width: "100%",
          mt: { xs: 0 , md:0 , sm:0 },
          pt:2,
          pb:2
        }}>

        <SectionContainer>
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
            ].map((item) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                sx={{
                  position: 'relative',

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

          {[35, 50, 65].map((left) => (
            <Box
              key={left}
              sx={{
                position: 'absolute',
                top: '60px',
                left: { md: `${left}%`, sm: "50%" },
                width: '1px',
                height: '30%',
                background: '#fff',
                display: { xs: 'none', md: 'block', sm: "none" },
              }}
            />))}

        </SectionContainer>
      </Box>
    </>
  );
}