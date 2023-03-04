import React, { useState, useEffect } from 'react';
import css from '@/styles/checkout.module.sass';
import { Box, Stepper, Step, StepLabel } from '@mui/material';
import Form from './form';

/* 
  此，主要為layout排版：
    1. <Stepper/> : 流程圖 
    2. <Ｆorm/> : 表單
*/
const Main = ({ data }) => {
  const { steps, content, queryStr } = data;
  const [activeStep, setActiveStep] = useState(0);
  let val = activeStep;

  // 流程圖的步驟控制：next, back, reset；目前reset還沒用到
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    sessionStorage.setItem('step', JSON.stringify((val += 1)));
  };

  const handleBack = () => {
    let val = activeStep;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    sessionStorage.setItem('step', JSON.stringify((val -= 1)));
  };

  const handleReset = () => {
    ssessionStorage.setItem('step', '0');
    setActiveStep(0);
  };

  useEffect(() => {
    let step = JSON.parse(sessionStorage.getItem('step'));
    step && setActiveStep(step);
  }, []);

  return (
    <>
      <Box className={css.progBarCon}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box className={css.formCon}>
        <Form
          data={{
            queryStr: queryStr,
            transCtx: content,
            handleNext: handleNext,
            handleBack: handleBack,
          }}
        />
      </Box>
    </>
  );
};

export default Main;
