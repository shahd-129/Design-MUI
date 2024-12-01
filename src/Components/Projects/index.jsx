import React from "react";
import { Grid, Card, CardMedia, Box } from "@mui/material";
import { ProjectImage } from '../../assets';
// import Clients from "Components/Clients";
import TitleSection from "../../util/TitleSection";
import SectionContainer from "Components/Theme/SectionContainer";

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
  return (
    <>
      <Box id="projects">
        <SectionContainer>
          <TitleSection title={'PROJECTS'} />
          <Grid
            container
            spacing={{ xs: 0, sm: 3, md: 1 }}
            sx={{
              mt: { xs: 2, sm: 3 },
              width: '100%',
              mx: 0,
            }}
          >
            {projects.map((project) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={project.imageUrl}
                sx={{
                  p: { xs: 1, sm: 2 },
                  mb: { xs: 1, sm: 0 },
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
                    alt={'Project'}
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
        </SectionContainer>
      </Box>
      {/* <Clients /> */}
    </>
  );
};

export default Projects;
