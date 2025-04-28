import './src/localization/i18next';
import React from 'react';
import {ThemeProvider} from './src/theme';
import {MainStack} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import './sheets.tsx';
import {SheetProvider} from 'react-native-actions-sheet';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <SheetProvider>
        <MainStack />
      </SheetProvider>
    </ThemeProvider>
  </Provider>
);
export default App;
