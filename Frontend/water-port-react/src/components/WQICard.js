import React from 'react'
import {Box, Stack, Divider} from '@mui/material'
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import excellent from '../image/excellent.png'
import good from '../image/good.png'
import average from '../image/average.png'
import poor from '../image/poor.png'
import verypoor from '../image/verypoor.png'


function WqiCard () {

    const theme = createTheme({
        components: {
          // Name of the component
          
        },
      });


    return(
        <>
        <ThemeProvider theme={theme}>
            <Box sx={{
                    backgroundColor: '#85D0FB',
                    borderRadius: 4,
                    boxShadow: 3,
                    pt: 4,
                    pb: 4,
                    mr: 15}}>
                <Grid container spacing={0} >
                    <Grid item xs={6} spacing={0}>
                        <Box sx={{pl:4}}>
                            <h2 className='h2-dash' >WQI</h2>
                        </Box>
                        
                        <br></br>

                        {/* excellent */}
                        <Box sx={{ 
                            backgroundColor: '#95F39F',
                            p:1,
                            m:0,
                            height:81,
                            }}>
                                <Stack direction="row" spacing={5}>
                                    <img src={excellent} alt="excellent" width="70" height="70"></img>
                                    <Stack>
                                        <h2 className='h2-dash'>excellent</h2>
                                        <h3 className='p-dash'>91-100</h3>
                                    </Stack>
                                    
                                    
                                </Stack>
                        </Box>

                        {/* good */}
                        <Box sx={{ 
                            backgroundColor: '#C8F391',
                            p:1,
                            m:0,
                            height:81}}>
                                <Stack direction="row" spacing={5}>
                                    <img src={good} alt="excellent" width="70" height="70"></img>
                                    <Stack>
                                        <h2 className='h2-dash'>good</h2>
                                        <h3 className='p-dash'>71-90</h3>
                                    </Stack>
                                    
                                    
                                </Stack>
                        </Box>

                        {/* average */}
                        <Box sx={{ 
                            backgroundColor: '#F9F598',
                            p:1,
                            m:0,
                            height:81}}>
                                <Stack direction="row" spacing={5}>
                                    <img src={average} alt="excellent" width="70" height="70"></img>
                                    <Stack>
                                        <h2 className='h2-dash'>average</h2>
                                        <h3 className='p-dash'>51-70</h3>
                                    </Stack>
                                    
                                    
                                </Stack>
                        </Box>

                        {/* poor */}
                        <Box sx={{ 
                            backgroundColor: '#FBCE76',
                            p:1,
                            m:0,
                            height:81}}>
                                <Stack direction="row" spacing={5}>
                                    <img src={poor} alt="excellent" width="70" height="70"></img>
                                    <Stack>
                                        <h2 className='h2-dash'>poor</h2>
                                        <h3 className='p-dash'>26-50</h3>
                                    </Stack>
                                    
                                    
                                </Stack>
                        </Box>

                        {/* very poor */}
                        <Box sx={{ 
                            backgroundColor: '#F9AD95',
                            p:1,
                            m:0,
                            height:81}}>
                                <Stack direction="row" spacing={5}>
                                    <img src={verypoor} alt="excellent" width="70" height="70"></img>
                                    <Stack>
                                        <h2 className='h2-dash'>very poor</h2>
                                        <h3 className='p-dash'>0-25</h3>
                                    </Stack>
                                    
                                    
                                </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={6} spacing={0}>
                        <h2 className='h2-dash'>Possible Usage</h2>
                        <br></br>
                        <Box sx={{ backgroundColor: '#FFFFFF',
                            p:1,
                            height:80}}>
                            <h3 className='h3-dash'>Drinking and irrigation</h3>
                        </Box>
                        <Divider></Divider>
                        <Box sx={{ backgroundColor: '#FFFFFF',
                            p:1,
                            height:80}}>
                            <h3 className='h3-dash'>Drinking and irrigation</h3>
                        </Box>
                        <Divider></Divider>
                        <Box sx={{ backgroundColor: '#FFFFFF',
                            p:1,
                            height:80}}>
                            <h3 className='h3-dash'>Irrigation and treatment needed before drinking</h3>
                        </Box>
                        <Divider></Divider>
                        <Box sx={{ backgroundColor: '#FFFFFF',
                            p:1,
                            height:80}}>
                            <h3 className='h3-dash'>Need attention for irrigation</h3>
                        </Box>
                        <Divider></Divider>
                        <Box sx={{ backgroundColor: '#FFFFFF',
                            p:1,
                            height:80}}>
                            <h3 className='h3-dash'>Unfit for all uses</h3>
                        </Box>
                    
                    </Grid>

                </Grid>
                
            </Box>


        </ThemeProvider>
        
        </>
    )
}

export default WqiCard