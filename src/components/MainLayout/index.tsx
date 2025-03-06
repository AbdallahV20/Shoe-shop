import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
interface MainLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'normal' | 'scroll';
  isHeaderFixed?: boolean;
}

const MainLayout = ({
  children,
  header,
  isHeaderFixed = false,
}: MainLayoutProps) => {
  const {theme, isDarkMode} = useAppTheme();
  return (
    <SafeAreaView style={styles(theme).container}>
      <StatusBar
        translucent
        backgroundColor={isHeaderFixed ? 'transparent' : theme.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      {!isHeaderFixed ? (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {header && header}
          <View style={styles(theme).contentContainer}>{children}</View>
        </ScrollView>
      ) : (
        <>
          {header && header}
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles(theme).contentContainer}>{children}</View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default MainLayout;
