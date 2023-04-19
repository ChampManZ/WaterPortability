import * as React from 'react';
import {Box, Stack, Button} from '@mui/material'
import '../style/guide.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
// import Stepper from '../components/Stepper';
import LinearStepper from '../components/LinearStepper';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4abIVXvrxB9Ubw7SRGDyaCiMWhP1PrTg",
  authDomain: "water-portability.firebaseapp.com",
  databaseURL: "https://water-portability-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-portability",
  storageBucket: "water-portability.appspot.com",
  messagingSenderId: "548406958050",
  appId: "1:548406958050:web:05ac416fc2f7bf49304bbb",
  measurementId: "G-667JGFNMPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const analytics = getAnalytics(app);

// Example of reading firebase data
const test = ref(database, 'Test/')
onValue(test, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
});

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