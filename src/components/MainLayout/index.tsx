import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
interface MainLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isHeaderFixed?: boolean;
  isScrollable?: boolean;
}

const MainLayout = ({
  children,
  header,
  isHeaderFixed = false,
  isScrollable,
}: MainLayoutProps) => {
  const {theme, isDarkMode} = useAppTheme();
  return (
    <SafeAreaView style={styles(theme).container}>
      <StatusBar
        translucent
        backgroundColor={isHeaderFixed ? 'transparent' : theme.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {!isHeaderFixed && isScrollable && (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {header && header}
          <View style={styles(theme).contentContainer}>{children}</View>
        </ScrollView>
      )}
      {isHeaderFixed && isScrollable && (
        <>
          {header && header}
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles(theme).contentContainer}>{children}</View>
          </ScrollView>
        </>
      )}

      {!isHeaderFixed && !isScrollable && (
        <>
          {header && header}
          <View style={styles(theme).contentContainer}>{children}</View>
        </>
      )}
      {isHeaderFixed && !isScrollable && (
        <>
          {header && header}
          <View style={styles(theme).contentContainer}>{children}</View>
        </>
      )}
    </SafeAreaView>
  );
};

export default MainLayout;
