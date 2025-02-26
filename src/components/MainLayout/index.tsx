import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
interface MainLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  variant?: 'normal' | 'scroll';
}

const MainLayout = ({
  children,
  header,
  variant = 'scroll',
}: MainLayoutProps) => {
  const {theme, isDarkMode} = useAppTheme();
  return (
    <SafeAreaView style={styles(theme).container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {header && header}
      {variant === 'scroll' ? (
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles(theme).contentContainer}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles(theme).contentContainer}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default MainLayout;
