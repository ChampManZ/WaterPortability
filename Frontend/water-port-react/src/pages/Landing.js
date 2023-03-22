import * as React from 'react';
import { Box, Button } from '@mui/material'
import '../style/landing.css'
import waterdrop from '../image/waterdrop.png'

function Landing(){

    return(
        <>
        <div className='landing'>
            <Box sx={{ p:20 }}>
                <img src={waterdrop} alt="waterdropLogo"></img>
                <h1 className='text-container'>Want to know your water quality ?</h1>
                <Button variant='contained' 
                sx={{
                    width: 250,
                    height: 100,
                    borderRadius: 20
                }}>
                    <h2>START</h2>
                
                </Button>
            </Box>
        </div>
            
        </>
    )
} 

export default Landing