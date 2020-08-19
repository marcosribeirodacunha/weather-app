import React, { createContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import usePersistedState from '../hooks/usePersistedState';
import { light, dark } from '../styles/themes';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState('@SkyForecast:theme', 'light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme === 'light' ? light : dark}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
