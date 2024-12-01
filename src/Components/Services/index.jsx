import React from "react";
import {
  Box,
  Grid,
} from "@mui/material";
// import {titleSection} from "../../util/titleSection";
import { ServicesImage1, ServicesImage2, ServicesImage3 } from '../../assets'


import ServicesCard from "./ServicesCardContent";
import TitleSection from "../../util/TitleSection";
import SectionContainer from "Components/Theme/SectionContainer";
const services = [
  {
    lableOne: "Preconstruction",
    lableTwo: "Planning",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl:
      ServicesImage1
  },
  {
    lableOne : "Architectural",
    lableTwo : "Modelling",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl:
      ServicesImage2
  },
  {
    lableOne: "Construction",
    lableTwo: "Management",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    imageUrl: ServicesImage3
  },
];
const ServicesSection = () => {

  return (<>
    <Box id="services">
      <SectionContainer>

        <TitleSection title={"SRVICES"}  />
        <Grid container spacing={2} my={4} >
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service?.title}>
              <ServicesCard service={service} />
            </Grid>
          ))}
        </Grid>


      </SectionContainer>
    </Box>
  </>
  );

};

export default ServicesSection;
