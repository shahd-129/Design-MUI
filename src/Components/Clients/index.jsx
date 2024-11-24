import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import {
    ClientImage1, ClientImage2, ClientImage3, ClientImage4,
    ClientImage5, ClientImageHover1, ClientImageHover2,
    ClientImageHover3, ClientImageHover4, ClientImageHover5
} from "../../assets";
import SectionContainer from 'Components/SectionContainer';

const clients = [
    { id: 0, src: ClientImage1, hoverSrc: ClientImageHover1 },
    { id: 1, src: ClientImage2, hoverSrc: ClientImageHover2 },
    { id: 2, src: ClientImage3, hoverSrc: ClientImageHover3 },
    { id: 3, src: ClientImage4, hoverSrc: ClientImageHover4 },
    { id: 4, src: ClientImage5, hoverSrc: ClientImageHover5 }
]

export default function Clients() {
    const theme = useTheme()

    const  md = useMediaQuery(theme.breakpoints.only('md')) // true when medium screen size is reached
    const  downd = useMediaQuery(theme.breakpoints.down('md')) // true when screen size is below medium screen size
    const upMd = useMediaQuery(theme.breakpoints.up('md')) // true when screen size is above medium screen size


    return (
        <Box bgcolor="greyBackground.main" py={2}>
            <SectionContainer>
                <Typography
                    variant='h3'
                    align="center"
                    sx={{
                        color: "inherit",
                        fontWeight: "bold",
                        marginTop: 3,
                        // marginBottom: 2,
                        marginBottom: { sx: "4", md: "3", sm: "4" },
                        paddingBottom: { sx: "4", md: "3", sm: "3" },
                        fontSize: { sx: '15px' }
                    }}
                >
                    CLIENTS
                </Typography>
                <Box
                    sx={{
                        height: { xs: "13px", sm: '7px', md: '7px' },
                        width: '100px',
                        backgroundColor: theme.palette.secondary.main,
                        margin: { xs: "0.5rem", sm: '0.8rem auto', md: '0.5rem auto' },
                    }}
                />

                <Grid container spacing={2} justifyContent="space-between">
                    {clients.map((client, index) => (
                        <Grid item xs={client?.id === 2 ? 12 : 6} sm={6} md={2} key={client?.id}>
                            <Box
                                component='img'
                                src={client.src}
                                alt={`Client ${index + 1}`}
                                sx={{
                                    width: "80%",
                                    maxWidth: "150px",
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
    );
}
