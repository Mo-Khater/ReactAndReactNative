import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Contact Information',
  'Education',
  'Skills',
  'Experience',
  'Resume'
];

function ResumeStepper({props}) {
  return (
    <Box sx={{ width: '60%'}}>
      <Stepper activeStep={props} alternativeLabel>
        {steps.map((kapran) => (
          <Step  key={kapran}  >
            <StepLabel><div style={{color:'white', fontSize:20 }}>{kapran}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default ResumeStepper;