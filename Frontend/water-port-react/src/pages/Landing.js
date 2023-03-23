import * as React from 'react';
import { useNavigate} from 'react-router-dom';
import { Box, Button } from '@mui/material'
import '../style/landing.css'
import waterdrop from '../image/waterdrop.png'

function Landing(){
    const navigate = useNavigate();

  const navigateToGuide = () => {
    //navigate to /measuring-guide
    navigate('/measuring-guide');
  };

    return(
        <>
        <div className='landing'>
            <Box sx={{ p:20 }}>
                <img src={waterdrop} alt="waterdropLogo"></img>
                <h1 className='h1-land'>Want to know your water quality ?</h1>
                <Button variant='contained' 
                sx={{
                    width: 250,
                    height: 100,
                    borderRadius: 20
                }} onClick={navigateToGuide}>
                    <h2 className='h2-land'>START</h2>
                
                </Button>
            </Box>
        </div>
            
        </>
    )
} 

export default Landing