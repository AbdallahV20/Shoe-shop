import {LogBox, Text} from 'react-native';
import './src/localization/i18next';
import React from 'react';
import {ThemeProvider} from './src/theme';
import {Icon, MainLayout} from './src/components';
import appFonts from './src/assets/fonts';
function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();
  return (
    <MainLayout>
      <Text>Hello World</Text>
      <Text style={{fontFamily: appFonts.extraBold}}>Hello World</Text>
      <Icon name="search" />
    </MainLayout>
  );
}

// Wrap the App component with the ThemeProvider in the main entry point
const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
export default AppWrapper;
