import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function ServicesCard({ service }) {
    const theme = useTheme()
    return (
        <Card sx={{ boxShadow: 'none' }}>
            <CardMedia
                component="img"
                image={service.imageUrl}
                alt={service.title}
                sx={{
                    objectFit: "cover",
                }}
            />
            <CardContent sx={{ background: "#f7f7f7", margin: '0 auto' }}>
                <Typography variant="h6" sx={{ fontSize: "22px", color: theme.palette.typography.colorTypography, textAlign: 'left', paddingLeft: '1rem', fontWeight: "bold" , lineHeight:'1.1em' }} mt={2}>
                    {service.title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left', fontSize: "14px", color: "#605F5F", paddingLeft: '1rem', fontFamily: "sans-serif" , lineHeight:"1.2rem" }} mt={2}>
                    {service.description}
                </Typography>
            </CardContent>
        </Card>
    )

}
