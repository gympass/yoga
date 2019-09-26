import React, { useContext } from 'react';
import ThemeProvider, { ThemeContext } from '../ThemeProvider';

const Button = props => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <button
        style={{
          color: '#FFF',
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.secondary,
        }}
        {...props}
      />
    </ThemeProvider>
  );
};

export default Button;
