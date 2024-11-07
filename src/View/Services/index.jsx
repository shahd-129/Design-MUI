import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import serviceImage1 from '../../assats/c19c76_22d8ec47d1484b09a9c333e4141a12a0.webp'
import serviceImage2 from '../../assats/b31d0e84cb714761b2b1f06c305023c7.webp'
import serviceImage3 from '../../assats/9e456adff0ee4a2c847cfd67a62454a3.webp'
const services = [
  {
    title: "Preconstruction Planning",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl:
    serviceImage1
  },
  {
    title: "Architectural Modelling",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl:
    serviceImage2
  },
  {
    title: "Construction Management",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl: serviceImage3
  },
];

const ServicesSection = () => {
  return (<>
  <section id="services">
  <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
    <Typography variant="h3" sx={{ fontWeight: "bold", letterSpacing: '0.05em' }} textAlign="center" mt={5}>
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

    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 300, margin: "auto", boxShadow: 'none' }}> 
            <CardMedia
              component="img"
              image={service.imageUrl}
              alt={service.title}
              sx={{
                width: '300px',
                height: '225px',
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ background: "#f7f7f7", margin: '0 auto' }}>
              <Typography variant="h6" sx={{ fontSize: "22px", color: "#3d5975", textAlign: 'left', paddingLeft: '1rem', fontWeight: "bold" }} mt={2}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left', fontSize:"15px", color: "#605F5F", paddingLeft: '1rem', fontFamily: "sans-serif" }} mt={2}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  </section>
  </>
);

};

export default ServicesSection;
