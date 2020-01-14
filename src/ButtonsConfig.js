let buttonsDefaultConfig = {
  animation: 'bounce',
};

 

export const getButtonsConfig = () => {
  return buttonsDefaultConfig;
};
export const buttonsGlobalConfig = config => {
  buttonsDefaultConfig = {
    ...buttonsDefaultConfig,
    ...config,
  };
};
