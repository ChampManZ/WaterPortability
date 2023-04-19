import * as React from 'react';
import {Box, Stack, Button} from '@mui/material'
import '../style/guide.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
// import Stepper from '../components/Stepper';
import LinearStepper from '../components/LinearStepper';



function Guide() {

    const navigate = useNavigate();
    const navigateToLand = () => {
        //navigate to /
        navigate('/');
      };

    return(
       
        <>
        <div className='guide'>
            <Box sx={{pl:4, height: 70}}>

               
                <Stack direction="row" spacing={2}>
                    <Button disableRipple startIcon={<ArrowBackIcon />} 
                    sx={{"&:hover": {backgroundColor: "transparent" }}}
                    onClick={navigateToLand}>
                        <h3 className='h3-guide'>Back</h3>
                    </Button>
                    
                </Stack>
            
            </Box>

            <Box >

                <Box sx={{mb: 5}}>
                    <h1 className='h1-guide'>Measuring Guide</h1>
              
                    <p className='p-guide'>Hold the probe in the water until the check turns green, 
                    <span className='break-point'>then remove the probe "after" the check turned green.</span></p> 
                
                </Box>
                
                <div className='center'>
        
                    {/* <Stepper></Stepper> */}
                    <Box sx={{m:5}}>
                        <LinearStepper></LinearStepper>
                    </Box>
                    
                </div>
                
            </Box>
        </div>
            
        </>
    )

}

export default Guide