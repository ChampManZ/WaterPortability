// import React from "react";
import React, { useState, Fragment } from "react";
import {Box,Grid} from '@mui/material'
import mqtt from "mqtt/dist/mqtt";

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

// client.on('message', (topic, message, packet) => {
    
//     // Updates React state with message
//     setMsg(message.toString());
//     console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
// })

//  // Sets default React state
//  const [msg, setMsg] = useState(
//     "red"
//   );

function DisplayCard() {
    // let array = []
    const [msg, setMsg] = useState([]);

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

    return(
        <>
        
        <Box sx={{width: 700,
                    height: 370,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 4,
                    boxShadow: 3,
                    }}>
            {/* <Stack direction="row" spacing={5} divider={<Divider orientation="vertical" flexItem />}>
            
                <Stack>
                    <h3>Temperature</h3>
                    <h1> {msg["temperature"]}</h1>
                </Stack>
                <Stack>
                    <h3>Turbidity</h3>
                    <h1> {msg["turbidity"]}</h1>
                </Stack>
                <Stack>
                    <h3>TDS</h3>
                    <h1> {msg["tds"]}</h1>
                </Stack>

            </Stack>

            <Stack direction="row" spacing={5} divider={<Divider orientation="vertical" flexItem />}>
                <Stack>
                    <h3>pH</h3>
                    <h1> {msg["tds"]}</h1>
                </Stack>
                <Stack>
                    <h3>Conductivity</h3>
                    <h1> {msg["tds"]}</h1>
                </Stack>
            </Stack> */}

            <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center">
            
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <h3>Temperature</h3>
                        <h1> {msg["temperature"]}</h1>
                        {/* <h1 id="tempID"> </h1> */}
                    </Grid>
                    <Grid item xs={4}>
                        <h3>Turbidity</h3>
                        <h1> {msg["turbidity"]}</h1>
                        {/* <h1 id="turbidityID"> </h1> */}
                    </Grid>
                    <Grid item xs={4}>
                        <h3>TDS</h3>
                        <h1> {msg["tds"]}</h1>
                        {/* <h1 id="tdsID"> </h1> */}
                    </Grid>
                    <Grid item xs={4}>
                        <h3>pH</h3>
                        <h1> {msg["ph"]}</h1>
                        {/* <h1 id="phID"> </h1> */}
                    </Grid>
                    <Grid item xs={4}>
                        <h3>Conductivity</h3>
                        <h1> {msg["tds"]}</h1>
                        {/* <h1 id="conductID"> </h1> */}
                    </Grid>
                </Grid>

            </Box>  

        </Box>
        
        
        
        </>
    )
}


export default DisplayCard