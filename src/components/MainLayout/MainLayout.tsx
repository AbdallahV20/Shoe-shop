import {ScrollView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useTheme} from '../../theme';
import styles from './styles';
const MainLayout = ({children}: PropsWithChildren) => {
  const {theme} = useTheme();
  return (
    <ScrollView contentContainerStyle={styles(theme).contentContainer}>
      {children}
    </ScrollView>
  );
};

export default MainLayout;
