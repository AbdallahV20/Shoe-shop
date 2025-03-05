import './src/localization/i18next';
import React from 'react';
import {ThemeProvider} from './src/theme';
import {MainStack} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <MainStack />
    </ThemeProvider>
  </Provider>
);
export default App;
