import { Box } from '@mui/material'
import React, { useMemo } from 'react'

export default function SectionContainer({ mlOnly , mrOnly ,mxNone ,children}) {
    const marginScreen = { xs: 3, sm: 2, md: 15, lg: 35, xl: 35 }
    
    const margins = useMemo(() => {
        if (mxNone) return { mx: 0 }
        if (mrOnly) return { mr: marginScreen }
        if (mlOnly) return { ml: marginScreen }
        return { mx: marginScreen }
    }, [mrOnly, mlOnly, mxNone])


    return (<Box {...margins}>
        {children}
    </Box>
    )
}
