import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Box,
  } from "@mui/material";

  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, onValue, update } from "firebase/database";
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

  const theme = createTheme({
    components: {
      // Name of the component
      MuiSvgIcon: {
        defaultProps: {
          // The props to change the default for.
          fontSize:  'large'
          
        },
      },
      
      MuiButton: {
        styleOverrides: {
          root:{
            fontSize: '22px',
            fontFamily: 'Mitr',
            borderRadius: 7
            
          }
        }
      }
    },
  });



  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 17,
      left: 'calc(-50% + 25px)',
      right: 'calc(50% + 25px)',
    },
    
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#FFFFFF',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));
  


function getSteps() {
return ["Hold temperature probe into the water", 
        "Hold pH probe into the water", 
        "Hold turbidity probe into the water",
        "Hold conductivity probe into the water",
        "Hold TDS probe into the water"];
}

// function getStepContent(step) {
// switch (step) {
//     case 0:
//     return "Select campaign settings...";
//     case 1:
//     return "What is an ad group anyways?";
//     case 2:
//     return "This is the bit I really care about!";
//     default:
//     return "Unknown step";
// }
// }

export default function LinearStepper() {

    const [activeStep, setActiveStep] = React.useState(0); 
    const steps = getSteps();

    const [tempBool, setTempBool] = useState(false)
    const [phBool, setPhBool] = useState(false)
    const [turbidityBool, setTurbidityBool] = useState(false)
    const [conductivityBool, setConductivityBool] = useState(false)
    const [tdsBool, setTdsBool] = useState(false)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setTempBool(false)
        setPhBool(false)
        setTurbidityBool(false)
        setConductivityBool(false)
        setTdsBool(false)
        };

    const handleReset = () => {
      setActiveStep(0);
    };

    const navigate = useNavigate();
    const navigateToDash = () => {
        //navigate to /
        navigate('/dashboard');
      };

      const tempCheck = ref(database, 'TemperatureCheck/status')
      onValue(tempCheck, (snapshot) => {
          const data = snapshot.val();
          if (data === true) {
            setTempBool(true)
            const updates = {};
            updates['TemperatureCheck/status'] = false;
            update(ref(database), updates)
          }
      });

      const phCheck = ref(database, 'phCheck/status')
      onValue(phCheck, (snapshot) => {
          const data = snapshot.val();
          if (data === true) {
            setPhBool(true)
            const updates = {};
            updates['phCheck/status'] = false;
            update(ref(database), updates)
          }
      });

      const turbidityCheck = ref(database, 'TurbidityCheck/status')
      onValue(turbidityCheck, (snapshot) => {
          const data = snapshot.val();
          if (data === true) {
            setTurbidityBool(true)
            const updates = {};
            updates['TurbidityCheck/status'] = false;
            update(ref(database), updates)
          }
      });

      const conductivityCheck = ref(database, 'ConductivityCheck/status')
      onValue(conductivityCheck, (snapshot) => {
          const data = snapshot.val();
          if (data === true) {
            setConductivityBool(true)
            const updates = {};
            updates['ConductivityCheck/status'] = false;
            update(ref(database), updates)
          }
      });

      const tdsCheck = ref(database, 'TDSCheck/status')
      onValue(tdsCheck, (snapshot) => {
          const data = snapshot.val();
          if (data === true) {
            setTdsBool(true)
            const updates = {};
            updates['TDSCheck/status'] = false;
            update(ref(database), updates)
          }
      });
        
    return(
        <ThemeProvider theme={theme}>
            <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector/>}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                  })}


            </Stepper>
            
            {activeStep === steps.length ? (
              <React.Fragment>

                {/* <Typography sx={{ mt: 2, mb: 1 }}> All steps completed - you&apos;re finished </Typography> */}
                <Box sx={{ mt: 7}}>
                  <Button onClick={navigateToDash} variant="contained" sx={{width: 150}}> FINISHED</Button>
                </Box>
                
          
              </React.Fragment>
            ) : (
              <React.Fragment>
            
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mt: 4}}>
                  <Button onClick={handleReset} variant="contained" sx={{width: 100}}>Reset</Button>
                  <Box sx={{ flex: '1 1 auto' }} />

                  { tempBool || phBool || turbidityBool || conductivityBool || tdsBool ?
                    <Button onClick={handleNext} variant="contained" sx={{width: 100}}>NEXT</Button>
                    : ''
                  }

                  {/* { phBool ?
                    <Button onClick={handleNext} variant="contained" sx={{width: 100}}>NEXT</Button>
                    : ''
                  }

                  { turbidityBool ?
                    <Button onClick={handleNext} variant="contained" sx={{width: 100}}>NEXT</Button>
                    : ''
                  }

                  { conductivityBool ?
                    <Button onClick={handleNext} variant="contained" sx={{width: 100}}>NEXT</Button>
                    : ''
                  }

                  { tdsBool ?
                    <Button onClick={handleNext} variant="contained" sx={{width: 100}}>NEXT</Button>
                    : ''
                  } */}

                </Box>
              </React.Fragment>
              )}

        </ThemeProvider>

    );

    
}