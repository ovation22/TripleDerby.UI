import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Main from './Main';
import TelemetryProvider from './utils/TelemetryProvider';
import config from './constants/config';

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
});

const disableTelemetry =
  config.nodeEnv !== config.nodeEnvironments.production ||
  config.applicationInsightsTelemetryKey === '';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <TelemetryProvider
            disabled={disableTelemetry}
            instrumentationKey={config.applicationInsightsTelemetryKey}
          >
            <Main />
          </TelemetryProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
