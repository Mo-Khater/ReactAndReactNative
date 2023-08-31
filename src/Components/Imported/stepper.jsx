import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Contact Information',
  'Education',
  'Skills',
];

export default function HorizontalLinearAlternativeLabelStepper({props}) {
  return (
    <Box sx={{ width: '60%'}}>
      <Stepper activeStep={props} alternativeLabel>
        {steps.map((label) => (
          <Step  key={label}  >
            <StepLabel><div style={{color:'white', fontSize:20 }}>{label}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}