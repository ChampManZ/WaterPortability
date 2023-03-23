import * as React from 'react';
import {Box, Stack, Button} from '@mui/material'
import '../style/guide.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';



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
                
                <h1 className='h1-guide'>Measuring Guide</h1>
              
                <p className='p-guide'>Hold the probe in the water until the check turns green. 
                <span className='break-point'>Remove the probe when the check turned green.</span></p> 
                
                <div className='center'>

                    <Box 
                        sx={{
                            width: 534,
                            height: 576,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 6,
                            m: 4,
                            boxShadow: 3
                        }}
                    >
                        <Stack spacing={2}>
                            
                            

                        </Stack>
                    
                    </Box>
                </div>
                
                
            </Box>
        </div>
            
        </>
    )

}

export default Guide