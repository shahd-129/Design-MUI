import { Box, Divider, Grid } from '@mui/material';
import React from 'react';

import {
  ClientImage1, ClientImage2, ClientImage3, ClientImage4,
  ClientImage5, ClientImageHover1, ClientImageHover2,
  ClientImageHover3, ClientImageHover4, ClientImageHover5
} from "../../assets";
import SectionContainer from '../Theme/SectionContainer';
import TitleSection from 'util/TitleSection';

const clients = [
  { id: 0, src: ClientImage1, hoverSrc: ClientImageHover1 },
  { id: 1, src: ClientImage2, hoverSrc: ClientImageHover2 },
  { id: 2, src: ClientImage5, hoverSrc: ClientImageHover5 },
  { id: 3, src: ClientImage3, hoverSrc: ClientImageHover3 },
  { id: 4, src: ClientImage4, hoverSrc: ClientImageHover4 },
];

export default function Clients() {
  return (
    <>
    <Box bgcolor="background.main" sx={{
      my: { md: 10 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pt:2,
      pb:2
    }} py={1}>
      <SectionContainer>
        <TitleSection 
          title={"CLIENTS"} 
          typographyProps={{ sx: { textAlign: { xs: 'center' } } }}  
          boxProps={{ sx: { margin: { xs: "0.5rem", sm: '0.5rem auto' }, marginLeft: { xs: "5rem" } } }} 
        />
        <Grid container spacing={2} justifyContent={'space-between'}>
          {clients.map((client, index) => (
            <Grid item xs={client?.id === 2 ? 12 : 6} sm={client?.id === 2 ? 12 : 6} md={2} key={client?.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component='img'
                src={client.src}
                alt={`Client ${index + 1}`}
                sx={{
                  width: "100%" ,
                  transition: "0.3s",

                  '&:hover': { content: `url(${client.hoverSrc})` },
                  '@media (max-width:600px)': {
                    width: '70%',
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </Box>
      </>
  );
}
