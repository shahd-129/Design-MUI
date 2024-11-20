import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

import {
    ClientImage1, ClientImage2, ClientImage3, ClientImage4,
    ClientImage5, ClientImageHover1, ClientImageHover2,
    ClientImageHover3, ClientImageHover4, ClientImageHover5
} from "../../assets";

export default function Clients() {
  const theme = useTheme()
    return (
        <>
            <Box
                sx={{
                    background: "#F7F7F7",
                    width: '100%',
                    height: '50vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    overflowX: {sx: "hidden"},
                }}
            >
                <Typography
                    variant='h3'
                    align="center"
                    sx={{
                        color: "inherit",
                        fontWeight: "bold",
                        marginTop: 3,
                        // marginBottom: 2,
                        marginBottom:{sx:"4" , md:"3" , sm:"3"}, 
                        paddingBottom:{sx:"4" , md:"3" , sm:"3"}, 
                        // fontSize:{sx:'15px'}
                    }}
                >
                    CLIENTS
                </Typography>
                <Box
                    sx={{
                        height: { xs: "13px", sm: '7px', md: '7px' },
                        width: '100px',
                        backgroundColor: theme.palette.secondary.main,
                        margin: { xs: "0.5rem", sm: '0.5rem auto', md: '0.5rem auto' },
                    }}
                />

                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    {[{ src: ClientImage1, hoverSrc: ClientImageHover1 }, { src: ClientImage2, hoverSrc: ClientImageHover2 }, { src: ClientImage3, hoverSrc: ClientImageHover3 }, { src: ClientImage4, hoverSrc: ClientImageHover4 }, { src: ClientImage5, hoverSrc: ClientImageHover5 }].map((image, index) => (
                        <Grid item xs={6} sm={6} md={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                component='img'
                                src={image.src}
                                alt={`Client ${index + 1}`}
                                sx={{
                                    width: "80%",
                                    maxWidth: "150px",
                                    transition: "0.3s",
                                    '&:hover': { content: `url(${image.hoverSrc})` },
                                    '@media (max-width:600px)': {
                                        width: '70%', 
                                    }
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Box>
            <Divider sx={{ bgcolor: "#5A8CAE", marginTop: 0.2 , display:{xs:"none" , md:"block"} }} />
        </>
    );
}
