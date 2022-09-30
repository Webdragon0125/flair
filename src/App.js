import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './routes';

import AppContext from './context/context';

import './App.css'

const App = () => {

  const theme = {
    themeColor: '#ADFF99',
    themeColor1: '#8C0AC8',
    fontColor: 'black',
    fontColor1: 'white',
    media1: '800px',
    borderColor1: '#A8A8A8',
    mapColor: '#F7FFF5',
  }

  const [informFlag, setInformFlag] = useState(true);

  const AppContextProps = {
    informFlag, setInformFlag,
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={AppContextProps}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
