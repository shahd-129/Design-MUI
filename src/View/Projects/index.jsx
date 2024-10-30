import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Projects() {
  return (<>
   <Box margin={5}>
        <Grid container spacing={0} alignItems="stretch" justifyContent="center">
          <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h4' textAlign="center" mb={1} ml={5} sx={{ fontWeight:"bold"}}>
                PROJECTS
              </Typography>
              <Box
                sx={{
                  height: '7px', 
                  width: '100px', 
                  backgroundColor: '#edcd1f', 
                  margin: '0.5rem auto', 
                }}
              />
          </Grid>
        </Grid>
      </Box>
  
  </>
  )
}
