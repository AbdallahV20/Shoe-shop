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
  hideBottomTab?: boolean;
}

const MainLayout = ({
  children,
  header,
  footer,
  isHeaderFixed,
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
        <>
          {header && header}
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles(theme, !!footer).contentContainer}>
            {children}
          </ScrollView>
          {footer && footer}
        </>
      )}
      {isHeaderFixed && isScrollable && (
        <>
          {header && header}
          <ScrollView
            bounces={false}
            contentContainerStyle={styles(theme, !!footer).contentContainer}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
          {footer && footer}
        </>
      )}

      {!isHeaderFixed && !isScrollable && (
        <>
          {header && header}
          <View style={styles(theme, !!footer).contentContainer}>
            {children}
          </View>
          {footer && footer}
        </>
      )}
      {isHeaderFixed && !isScrollable && (
        <>
          {header && header}
          <View style={styles(theme, !!footer).contentContainer}>
            {children}
          </View>
          {footer && footer}
        </>
      )}
    </SafeAreaView>
  );
};

export default MainLayout;
