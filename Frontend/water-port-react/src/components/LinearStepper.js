import React from "react";
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

function getStepContent(step) {
switch (step) {
    case 0:
    return "Select campaign settings...";
    case 1:
    return "What is an ad group anyways?";
    case 2:
    return "This is the bit I really care about!";
    default:
    return "Unknown step";
}
}

export default function LinearStepper() {

    const [activeStep, setActiveStep] = React.useState(0); 
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        };

    const handleReset = () => {
      setActiveStep(0);
    };

    const navigate = useNavigate();
    const navigateToDash = () => {
        //navigate to /
        navigate('/dashboard');
      };

        
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

                  <Button onClick={handleNext} variant="contained" sx={{width: 100}}> NEXT
                    
                  </Button>

                </Box>
              </React.Fragment>
              )}

        </ThemeProvider>

    );

    
}