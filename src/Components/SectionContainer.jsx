import { Box } from '@mui/material'
import React, { useMemo } from 'react'

export default function SectionContainer({ mrOnly, mlOnly, mxNone, children, ...props }) {
    const screenMargins = { xs: 2, sm: 5, md: 15, lg: 35, xl: 35 }

    const margins = useMemo(() => {
        if (mxNone) return { mx: 0 }
        if (mrOnly) return { mr: screenMargins }
        if (mlOnly) return { ml: screenMargins }
        return { mx: screenMargins }
    }, [mrOnly, mlOnly, mxNone])

    return (
        <Box {...margins} my={{ xs: 6, sm: 8, md: 10 }} {...props}>
            {children}
        </Box>
    )
}
