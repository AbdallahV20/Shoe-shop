import {ScrollView, StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useTheme} from '../../theme';
import styles from './styles';
const MainLayout = ({children}: PropsWithChildren) => {
  const {theme, isDarkMode} = useTheme();
  return (
    <ScrollView contentContainerStyle={styles(theme).contentContainer}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {children}
    </ScrollView>
  );
};

export default MainLayout;
