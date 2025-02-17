import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
interface MainLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

const MainLayout = ({children, header}: MainLayoutProps) => {
  const {theme, isDarkMode} = useAppTheme();
  return (
    <SafeAreaView style={styles(theme).container}>
      {header && header}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles(theme).contentContainer}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainLayout;
