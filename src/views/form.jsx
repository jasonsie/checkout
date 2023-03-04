import React from 'react';
import F_data from '../components/f_data';
import F_fullfill from '../components/f_fullfill';
import F_payment from '../components/f_payment';

// 此，控制所需的form-components
const Form = ({ data }) => {
  const { transCtx, queryStr, handleNext, handleBack } = data;
  const stepToComponents = {
    step1: (
      <F_data
        data={{
          transCtx: transCtx,
          handleNext: handleNext,
        }}
      />
    ),
    step2: (
      <F_payment
        data={{
          transCtx: transCtx,
          handleNext: handleNext,
          handleBack: handleBack,
        }}
      />
    ),
    step3: <F_fullfill data={{ transCtx: transCtx }} />,
  };

  return <>{stepToComponents[queryStr]}</>;
};

export default Form;
