// import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function TitleSection({title , typographyProps = {}, boxProps = {} }) {
 
 return (<>
     <Typography
     {...typographyProps}
          variant="h3"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.05em",
            textAlign: { xs: "left", sm: "center", md: "center" },
            fontSize:{xs:"35px" , sm:"35px" , md:"55px"},
            ...typographyProps.sx
          }}
          mt={5}
        >
         {title}
        </Typography>
        <Box
          {...boxProps}
          sx={{
            height: { xs: "13px", sm: '7px', md: '7px' },
            width: '100px',
            bgcolor: 'secondary.main',
            margin: { xs: "0.5rem", sm: '0.5rem auto', md: '0.5rem auto' },
            ...boxProps.sx
            
          }}
        />

  
  </>
  )
}
