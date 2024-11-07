import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import imageProject from '../../assats/b8f768e092644bc58b303f107f02411d.webp'
import Clients from "../Clients";

const projects = [
  {
    imageUrl:  imageProject,
  },
  {
    imageUrl:
      imageProject,
  },
  {
    imageUrl: imageProject
  },
  {
    imageUrl:
      imageProject
  },
];

const Projects = () => {
  return (<>
  <section id="projects">
  <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
    <Typography variant="h3" sx={{ fontWeight: "bold", letterSpacing: '0.05em' }} textAlign="center" mt={5}>
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

    <Grid container spacing={2} margin='0 3' padding={3}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card sx={{ maxWidth: "100%", margin: "auto", boxShadow: "none", borderRadius: "none" }}>
            <CardMedia
              component="img"
              image={project.imageUrl}
              alt={`Project ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  <Clients/>

  </section>
  
  </>
  );
};

export default Projects;
