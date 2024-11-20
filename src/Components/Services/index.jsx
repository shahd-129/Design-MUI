import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
} from "@mui/material";

import { ServicesImage1, ServicesImage2, ServicesImage3 } from '../../assets'


import ServicesCard from "./ServicesCardContent";
const services = [
  {
    title: "Preconstruction Planning",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl:
      ServicesImage1
  },
  {
    title: "Architectural Modelling",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl:
      ServicesImage2
  },
  {
    title: "Construction Management",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl: ServicesImage3
  },
];
const ServicesSection = () => {
  const theme = useTheme()
  return (<>
    <section id="services">
      <Container maxWidth="md" sx={{ textAlign: "center"}}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.05em",
            textAlign: { xs: "left", sm: "center", md: "center" },
            ml:{ xs: "2rem"}
          }}
          mt={5}
        >
          SERVICES
        </Typography>
        <Box
          sx={{
            height: { xs: "13px", sm: '7px', md: '7px' },
            width: '100px',
            backgroundColor: theme.palette.secondary.main,
            margin: { xs: "0.5rem", sm: '0.5rem auto', md: '0.5rem auto' },
            ml:{ xs: "2rem"}
          }}
        />

        <Grid container spacing={2} my={4} sx={{ml:{xs:"0"} , pr:{xs:"0"}}}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServicesCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  </>
  );

};

export default ServicesSection;
