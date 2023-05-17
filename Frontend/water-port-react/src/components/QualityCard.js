import React, { useEffect, useState } from 'react'
import {Box,Grid, Stack} from '@mui/material'
import excellent from '../image/excellent.png'
import good from '../image/good.png'
import average from '../image/average.png'
import poor from '../image/poor.png'
import verypoor from '../image/verypoor.png'
import Card from '@mui/material/Card';
import mqtt from "mqtt/dist/mqtt";
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';


const result = ['exellent', 'good', 'average', 'poor', 'very poor']
const pic = [{excellent}, {good}, {average}, {poor}, {verypoor}]
const color = ['#95F39F', '#C8F391', '#F9F598', '#FBCE76', '#F9AD95']
const wqi = 6

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
let options = {
    username: 'kevin',
    password: 'watermonitor',
    keepalive: 60,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    }
}

const host = 'ws://broker.emqx.io:8083/mqtt'

console.log('Connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('connect', () => {
    console.log('Client connected:' + clientId)
    // Subscribe
    client.subscribe('watermonitor', { qos: 0 })
})

function QualityCard () {
    
    const [backgroundColorDynamic, setBackgroundColorDynamic] = useState('')
    const [wqiImgDynamic, setWqiImgDynamic] = useState()

    let testWQI = 1

    const [msg, setMsg] = useState([]);
    const [wqiText, setWqiText] = useState('')

    // const [tempDis, setTempDis] = useState(0)

    client.on('message', (topic, message, packet) => {
    
        
        // console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)

        const msg = JSON.parse(message.toString())
        console.log(msg)
        // Updates React state with message
        setMsg(msg);
        // if(msg.length === 0) {
        //     array.push(message)
        // }
        // else{
        //     for(let i = 0; i<msg.length; i++) {
        //         if (msg[i] !== message.toString()) {
        //             array.push(message)
        //         }
        //     }
            
        // }
        
    })

    console.log(msg)

    useEffect(() => {
        if (msg["wqi"] >= 0 && msg["wqi"] <= 25) {
            setBackgroundColorDynamic('#95F39F')
            setWqiImgDynamic(excellent)
            setWqiText('Excellent')
        }
    
        if (msg["wqi"] >= 25 && msg["wqi"] <= 50) {
            setBackgroundColorDynamic('##C8F391')
            setWqiImgDynamic(good)
            setWqiText('Good')
        }
    
        if (msg["wqi"] >= 51 && msg["wqi"] <= 75) {
            setBackgroundColorDynamic('#F9F598')
            setWqiImgDynamic(average)
            setWqiText('Average')
        }
    
        if (msg["wqi"] >= 76 && msg["wqi"] <= 100) {
            setBackgroundColorDynamic('#FBCE76')
            setWqiImgDynamic(poor)
            setWqiText('Poor')
        }
    
        if (msg["wqi"] >= 101 && msg["wqi"] <= 150) {
            setBackgroundColorDynamic('#F9AD95')
            setWqiImgDynamic(verypoor)
            setWqiText('Very Poor')
        }
    })

    useEffect(() => {

        if (testWQI >= 0 && testWQI <= 25) {
            setBackgroundColorDynamic('#95F39F')
            setWqiImgDynamic(excellent)
            setWqiText('Excellent')
        }

        if (testWQI >= 26 && testWQI <= 50) {
            setBackgroundColorDynamic('#C8F391')
            setWqiImgDynamic(good)
            setWqiText('Good')
        }
    
        if (testWQI >= 51 && testWQI <= 75) {
            setBackgroundColorDynamic('#F9F598')
            setWqiImgDynamic(average)
            setWqiText('Average')
        }
    
        if (testWQI >= 76 && testWQI <= 100) {
            setBackgroundColorDynamic('#FBCE76')
            setWqiImgDynamic(poor)
            setWqiText('Poor')
        }
    
        if (testWQI >= 101 && testWQI <= 150) {
            setBackgroundColorDynamic('#F9AD95')
            setWqiImgDynamic(verypoor)
            setWqiText('Very Poor')
        }

    }, )

    return (
        <>
            <Card sx={{width: 700,
                    height: 370,
                    borderRadius: 4,
                    boxShadow: 3}}>
                <Stack direction='row'spacing={2}>

                    <Grid item xs={6}>
                        <Box sx={{ 
                                backgroundColor: backgroundColorDynamic,
                                borderRadius: 4,
                                p: 6.5}}>

                        
                            <Stack direction='row' justifyContent="center" alignItems="center" spacing={2}>
                                <img src={wqiImgDynamic} alt="excellent" width="180" height="180"></img>
                                
                                <Stack>
                                    <h1 className='h1-wqi'>{msg["wqi"]}</h1>
                                    <h3>WQI</h3>
                                </Stack>
                            </Stack>
                            <h1>{wqiText}</h1>
                        </Box>
                
                    </Grid>
                    <Grid item xs={6} sx={{p: 2}}>
                        <Stack spacing={6}>

                        
                            <h3 className='p-dash'>Temperature (°C) : </h3>
                            
                            <h3 className='p-dash'>Turbidity (NTU) : </h3>
                            
                            <h3 className='p-dash'>TDS (mg/l) : </h3>
                            
                            <h3 className='p-dash'>pH : </h3>
                            
                            <h3 className='p-dash'>Conductivity (µS/cm) : </h3>
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