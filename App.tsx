import './src/localization/i18next';
import React from 'react';
import {ThemeProvider} from './src/theme';
import {MainStack} from './src/navigation';

const App = () => (
  <ThemeProvider>
    <MainStack />
  </ThemeProvider>
);
export default App;
