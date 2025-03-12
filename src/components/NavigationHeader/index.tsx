import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import styles from './styles';
import {useAppTheme} from '../../theme';
interface NavigationHeaderProps {
  startAction?: React.ReactNode;
  title: string;
  endAction?: React.ReactNode;
}
const NavigationHeader = ({
  startAction,
  title,
  endAction,
}: NavigationHeaderProps) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles(theme).container}>
      <View>{startAction}</View>
      <Text fontSize={18} textAlign="center" fontWeight="semiBold">
        {title}
      </Text>
      <View>{endAction}</View>
    </View>
  );
};

export default NavigationHeader;
