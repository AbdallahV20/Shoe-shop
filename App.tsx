import './src/localization/i18next';
import React, {useEffect, useRef} from 'react';
import {ThemeProvider} from './src/theme';
import {MainStack} from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import './sheets.tsx';
import {SheetProvider} from 'react-native-actions-sheet';
import {PersistGate} from 'redux-persist/integration/react';
import {AppState} from 'react-native';
import {checkToken} from './src/firebase/auth.ts';
//PersistGate prevent the children from rendering until the presisted data loads to the redux store
//Loading shows loading indicator until the children rendered
const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    AppState.addEventListener('change', async nextState => {
      if (
        appState.current.match('/background|inactive/') &&
        nextState === 'active'
      ) {
        //come from backgorund to foreground
        //'put the app in the background and return to it again'
        await checkToken();
      }
      appState.current = nextState;
    });
    //will run everytime the app re render again 'restart or run the app'
    checkToken();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider>
          <SheetProvider>
            <MainStack />
          </SheetProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
