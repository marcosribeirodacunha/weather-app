import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeContext';
import { SettingProvider } from './contexts/SettingContext';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider>
      <SettingProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </SettingProvider>
    </ThemeProvider>
  );
}

export default App;
