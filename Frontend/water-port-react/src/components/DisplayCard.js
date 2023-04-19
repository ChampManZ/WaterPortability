import React from "react";
import {Box} from '@mui/material'
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

client.on('message', (topic, message, packet) => {
    console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
})

function DisplayCard() {
    return(
        <>
        
        <Box sx={{width: 700,
                    height: 370,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 4,
                    
                    boxShadow: 3}}>

                        

        </Box>
        
        
        
        </>
    )
}


export default DisplayCard