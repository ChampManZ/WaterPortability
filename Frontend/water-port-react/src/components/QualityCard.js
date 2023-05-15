import React from 'react'
import {Box,Grid, Stack, Divider} from '@mui/material'
import excellent from '../image/excellent.png'
import good from '../image/good.png'
import average from '../image/average.png'
import poor from '../image/poor.png'
import verypoor from '../image/verypoor.png'

function QualityCard () {

    return (

        <Box sx={{width: 700,
            height: 370,
            backgroundColor: '#FFFFFF',
            borderRadius: 4,
            boxShadow: 3
            }}>
            
            {/* <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
                {/* <Grid item xs={4}>
                    <img src={poor} alt="excellent" width="100" height="100"></img>
                </Grid>
                <Grid item xs={4}>
                    <Stack>
                        <h1>98</h1>
                        <h3>WQI</h3>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <h3>Exellent</h3>
                </Grid>

            
                <Grid item xs={2.4}>
                    <h3>temperature: </h3>
                
                </Grid>
                <Grid item xs={2.4}>
                    <h3>turbidity: </h3>
                </Grid>
                <Grid item xs={2.4}>
                    <h3>TDS: </h3>
                </Grid>
                <Grid item xs={2.4}>
                    <h3>pH</h3>
                </Grid>
                <Grid item xs={2.4}>
                    <h3>conductivity: </h3>
                </Grid>
            </Grid> */}
            <Stack direction='row'spacing={2}>

            

                <Grid item xs={6}>
                    <Box sx={{ 
                            backgroundColor: '#F9AD95',
                            borderRadius: 4,
                            p: 8.5}}>

                    
                        <Stack direction='row' justifyContent="center" alignItems="center" spacing={2}>
                            <img src={poor} alt="excellent" width="150" height="150"></img>
                            
                            <Stack>
                                <h1>98</h1>
                                <h3>WQI</h3>
                            </Stack>
                        </Stack>
                        <h1>Exellent</h1>
                    </Box>
            
                </Grid>
                <Grid item xs={6} sx={{p: 2}}>
                    <Stack spacing={6}>

                    
                        <h3 className='p-dash'>temperature: </h3>
                        
                        <h3 className='p-dash'>turbidity: </h3>
                        
                        <h3 className='p-dash'>TDS: </h3>
                        
                        <h3 className='p-dash'>pH: </h3>
                        
                        <h3 className='p-dash'>conductivity: </h3>
                    </Stack>
                </Grid>
                {/* <Grid item xs={4}>
                    <h3>Exellent</h3>
                </Grid>

            
                <Grid item xs={2.4}>
                    <h3>temperature: </h3>
                
                </Grid>
                <Grid item xs={2.4}>
                    <h3>turbidity: </h3>
                </Grid>
                <Grid item xs={2.4}>
                    <h3>TDS: </h3>
                </Grid>
                <Grid item xs={2.4}>
                    <h3>pH</h3>
                </Grid>
                <Grid item xs={2.4}>
                    <h3>conductivity: </h3>
                </Grid> */}
            {/* </Grid> */}
            </Stack>

        </Box>
    )

}

export default QualityCard