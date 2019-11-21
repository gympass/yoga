const activeDot = (currentIndex, activeStep) =>
  typeof activeStep !== 'number' ? false : currentIndex <= activeStep;

export default activeDot;
