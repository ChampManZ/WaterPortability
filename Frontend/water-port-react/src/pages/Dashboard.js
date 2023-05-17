import React from 'react'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ParamCard from '../components/ParamCard'
import WQICard from '../components/WQICard';
import {Box, Button} from '@mui/material'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../style/flexbox.css'
import DisplayCard from '../components/DisplayCard'
import {useNavigate} from 'react-router-dom';
import QualityCard from '../components/QualityCard';



function Dashboard() {

    const theme = createTheme({
        components: {
          // Name of the component
          MuiButton: {
            defaultProps: {
                disableRipple: true
            },

            styleOverrides: {
              root:{
                fontSize: '17px'
              }
            }
          }
        },
      });

    const navigate = useNavigate();
    const navigateToLand = () => {
        //navigate to /
        navigate('/');
    };

    return (
        <>
        <Box>
            <Navbar></Navbar>
            <ThemeProvider theme={theme}>
                {/* <Box sx={{pl:4, height: 70}}>

                    
                    <Stack direction="row" spacing={2}>
                        <Button disableRipple startIcon={<ArrowBackIcon />} 
                        sx={{"&:hover": {backgroundColor: "transparent" }}}
                        onClick={navigateToLand}>
                            <h3 className='h3-measure'>Measure Again</h3>
                        </Button>
                        
                    </Stack>

                </Box> */}

                <Box sx={{mt: 8, ml:10, mr:10}}>
                    
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
                        <Grid item xs={6}>
                            <h1 className='h1-dash'>Your Water Quality</h1>
                            <Box sx={{mt:5}}>
                                <QualityCard></QualityCard>
                                <Box
                                    m={1} 
                                    display="flex"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    
                                    >
                                    <Button onClick={navigateToLand}> <h3 className='h3-measure'>Measure Again</h3></Button>
                                </Box>
                            </Box>
                            {/* <Box sx={{ height: 70}}>

                    
                                <Stack direction="row" spacing={2}>
                                    
                                    <Button disableRipple
                                    // <Button disableRipple startIcon={<ArrowBackIcon />}  
                                    sx={{"&:hover": {backgroundColor: "transparent" }}}
                                    onClick={navigateToLand}>
                                        <h3 className='h3-measure'>Measure Again</h3>
                                    </Button>
                                    
                                </Stack>

                            </Box> */}
                                                      

                        
                            <h1 className='h1-dash'> Water Quality Index</h1>
                            <Box sx={{mt:5, mb:3}}>
                                <WQICard></WQICard>
                            </Box>
                            
                        </Grid>

                        <Grid item xs={6}>
                            <h1 className='h1-dash'>Mornitoring</h1>
                            <Box sx={{mt:5, mb:3}}>
                                <DisplayCard></DisplayCard>
                            </Box>  
                            <br></br>
                            <br></br>
                            <h1 className='h1-dash'>Parameter</h1>
                            <Box sx={{mt:5}}>
                                <ParamCard></ParamCard>
                            </Box>
                        </Grid>


                    </Grid> 
                </Box>
            </ThemeProvider>
        
        </Box>
        </>
  )
}

export default Dashboard