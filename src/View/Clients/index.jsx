import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import imageClients from '../../assats/Clients/c19c76_6c64fe7fa8964e09bf2143f277e5f8ed.webp';
import imageClients2 from '../../assats/Clients/c19c76_1d3deb1566654d56b8630dcabfe7027e.webp';
import imageClients3 from '../../assats/Clients/c19c76_452720f393594be0899dbc968190e648.webp';
import imageClients4 from '../../assats/Clients/c19c76_cfeea1550efb4df2bbd1d142a13af6d2.webp';
import imageClients5 from '../../assats/Clients/c19c76_75b403aa340f4ec2b4a09dd1a9ecafeb.webp';

import hoverImage1 from "../../assats/Clients/c19c76_82f231993a674b1896b44089efb147fc.webp";
import hoverImage2 from "../../assats/Clients/c19c76_75bd6ff08bc54e11a0bb3b681f80e249.webp";
import hoverImage3 from "../../assats/Clients/c19c76_1d51056e398947f2ad3677f37a94d0b9.webp";
import hoverImage4 from "../../assats/Clients/c19c76_ba81a195b94a4f9facf9c5ffd28b7cd0.webp";
import hoverImage5 from "../../assats/Clients/c19c76_cf4a17b1cf394757aa44ab9ba26df915.webp";

export default function Clients() {
    return (<>
            <Box
                sx={{
                    background: "#F7F7F7",
                    width: '100%',
                    height: '50vh', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    overflowX: "hidden"
                }}
            >
                <Typography
                    variant='h3'
                    align="center"
                    sx={{
                        color: "inherit",
                        fontWeight: "bold",
                        marginTop: 3,  
                        marginBottom: 2 
                    }}
                >
                    CLIENTS
                </Typography>
                <Box
                    sx={{
                        height: '7px',
                        width: '100px',
                        backgroundColor: '#edcd1f',
                        margin: '0.5rem auto',
                    }}
                />
    
                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    {[{ src: imageClients, hoverSrc: hoverImage1 }, { src: imageClients2, hoverSrc: hoverImage2 }, { src: imageClients5, hoverSrc: hoverImage5 }, { src: imageClients3, hoverSrc: hoverImage3 }, { src: imageClients4, hoverSrc: hoverImage4 }].map((image, index) => (
                        <Grid item xs={12} sm={6} md={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box 
                                component='img' 
                                src={image.src} 
                                alt={`Client ${index + 1}`} 
                                sx={{
                                    width: "50%",
                                    maxWidth: "150px",
                                    transition: "0.3s",
                                    '&:hover': { content: `url(${image.hoverSrc})` }
                                }} 
                            />
                        </Grid>
                    ))}
                </Grid>
    
            </Box>
                <Divider sx={{ bgcolor: "#5A8CAE", marginTop: 0.2 }} />
    </>
        );
}
