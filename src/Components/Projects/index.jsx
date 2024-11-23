import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  useTheme,
} from "@mui/material";
import { ProjectImage } from '../../assets';
import Clients from "Components/Clients";

const projects = [
  {
    imageUrl: ProjectImage,
  },
  {
    imageUrl: ProjectImage,
  },
  {
    imageUrl: ProjectImage,
  },
  {
    imageUrl: ProjectImage,
  },
];

const Projects = () => {
  const theme = useTheme();
  return (<>
    <section id="projects">
      <Container 
        maxWidth="md" 
        sx={{ 
          textAlign: "center", 
          py: 2,
          px: { xs: 0, sm: 2 }, 
          
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: { xs: "left", sm: "center" },
            ml: { xs: "1rem", sm: 0 },
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
          mt={5}
        >
          PROJECTS
        </Typography>
        <Box
          sx={{
            height: { xs: "13px", sm: '7px' },
            width: '100px',
            backgroundColor: theme.palette.secondary.main,
            margin: { xs: "0.5rem 0 0.5rem 1rem", sm: '0.5rem auto' },
          }}
        />

        <Grid 
          container 
          spacing={{ xs: 0, sm: 3 , md:1 }} 
          sx={{ 
            mt: { xs: 2, sm: 3 },
            width: '100%',
            mx: 0
          }}
        >
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              key={index}
              sx={{
                p: { xs: 1, sm: 2 }, 
                mb: { xs: 1, sm: 0 }
              }}
            >
              <Card
                sx={{
                  borderRadius: 0,
                  boxShadow: 'none',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  image={project.imageUrl}
                  alt={`Project ${index + 1}`}
                  sx={{
                    width: '100%',
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
      <Clients />
      
      </>
  );
};

export default Projects;