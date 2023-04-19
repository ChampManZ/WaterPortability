import React from 'react'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ParamCard from '../components/ParamCard'
import WqiCard from '../components/WqiCard';
import {Box, Button} from '@mui/material'
import firebase from '../utils/firebase'
import '../style/flexbox.css'
import DisplayCard from '../components/DisplayCard'
import {useNavigate} from 'react-router-dom';



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
        // <div>
        //     <Navbar />
        //     <div class="flex-container">
        //         <div class="flex-left" style={fontFamilyStyle}>
        //             <h3 style={fontFamilyStyle}>Your Water Quality</h3>
        //             <Card /> <br />
        //             <button type='button'>Measure again</button>
        //             <h3>Water Quality Index</h3>
        //             <GradeCard />
        //         </div>
        //         <div class="flex-right" style={fontFamilyStyle}>
        //             <WQICard />
        //         </div>
        //     </div>
        // </div>

        <>
        <Box>
            <Navbar></Navbar>
            <ThemeProvider theme={theme}>
                <Box sx={{mt: 8, ml:10, mr:10}}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
                        <Grid item xs={6}>
                            <h1 className='h1-dash'>Your Water Quality</h1>
                            <Box sx={{mt:5, mb:3}}>
                                <DisplayCard></DisplayCard>
                            </Box>
                            <Button onClick={navigateToLand}>Measure Again</Button>

                        
                            <h1 className='h1-dash'> Water Quality Index</h1>
                            <Box sx={{mt:5, mb:3}}>
                                <WqiCard></WqiCard>
                            </Box>
                            
                        </Grid>

                        <Grid item xs={6}>
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