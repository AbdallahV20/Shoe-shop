import {ScrollView, StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useTheme} from '../../theme';
import styles from './styles';
const MainLayout = ({children}: PropsWithChildren) => {
  const {theme, themeName} = useTheme();
  return (
    <ScrollView
      bounces={false}
      overScrollMode="never"
      contentContainerStyle={styles(theme).contentContainer}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'}
      />
      {children}
    </ScrollView>
  );
};

export default MainLayout;
