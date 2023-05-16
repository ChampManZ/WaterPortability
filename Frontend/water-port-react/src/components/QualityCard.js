import React from 'react'
import {Box,Grid, Stack, Divider, makeStyles} from '@mui/material'
import excellent from '../image/excellent.png'
import good from '../image/good.png'
import average from '../image/average.png'
import poor from '../image/poor.png'
import verypoor from '../image/verypoor.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const result = ['exellent', 'good', 'average', 'poor', 'very poor']
const pic = [{excellent}, {good}, {average}, {poor}, {verypoor}]
const color = ['#95F39F', '#C8F391', '#F9F598', '#FBCE76', '#F9AD95']
const wqi = 6



function QualityCard () {
    
    

    return (
        <>
            <Card sx={{width: 700,
                    height: 370,
                    borderRadius: 4,
                    boxShadow: 3}}>
                <Stack direction='row'spacing={2}>

                    <Grid item xs={6}>
                        <Box sx={{ 
                                backgroundColor: '#F9AD95',
                                borderRadius: 4,
                                p: 6.5}}>

                        
                            <Stack direction='row' justifyContent="center" alignItems="center" spacing={2}>
                                <img src={poor} alt="excellent" width="180" height="180"></img>
                                
                                <Stack>
                                    <h1 className='h1-wqi'>98</h1>
                                    <h3>WQI</h3>
                                </Stack>
                            </Stack>
                            <h1>Exellent</h1>
                        </Box>
                
                    </Grid>
                    <Grid item xs={6} sx={{p: 2}}>
                        <Stack spacing={6}>

                        
                            <h3 className='p-dash'>temperature (°C) : </h3>
                            
                            <h3 className='p-dash'>turbidity (NTU) : </h3>
                            
                            <h3 className='p-dash'>TDS (mg/l) : </h3>
                            
                            <h3 className='p-dash'>pH : </h3>
                            
                            <h3 className='p-dash'>conductivity (µS/cm) : </h3>
                        </Stack>
                    </Grid>
                    
                </Stack>
                
            </Card>
        </>
        

        // <Box sx={{width: 700,
        //     height: 370,
        //     backgroundColor: '#FFFFFF',
        //     borderRadius: 4,
        //     boxShadow: 3
        //     }}>
            
        //     <Stack direction='row'spacing={2}>

            

        //         <Grid item xs={6}>
        //             <Box sx={{ 
        //                     backgroundColor: '#F9AD95',
        //                     borderRadius: 4,
        //                     p: 6.5}}>

                    
        //                 <Stack direction='row' justifyContent="center" alignItems="center" spacing={2}>
        //                     <img src={poor} alt="excellent" width="180" height="180"></img>
                            
        //                     <Stack>
        //                         <h1 className='h1-wqi'>98</h1>
        //                         <h3>WQI</h3>
        //                     </Stack>
        //                 </Stack>
        //                 <h1>Exellent</h1>
        //             </Box>
            
        //         </Grid>
        //         <Grid item xs={6} sx={{p: 2}}>
        //             <Stack spacing={6}>

                    
        //                 <h3 className='p-dash'>temperature: </h3>
                        
        //                 <h3 className='p-dash'>turbidity: </h3>
                        
        //                 <h3 className='p-dash'>TDS: </h3>
                        
        //                 <h3 className='p-dash'>pH: </h3>
                        
        //                 <h3 className='p-dash'>conductivity: </h3>
        //             </Stack>
        //         </Grid>
                
        //     </Stack>

        // </Box>
    )

}

export default QualityCard