import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import styles from './styles';
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
  return (
    <View style={styles.container}>
      <View>{startAction}</View>
      <Text fontSize={24} fontWeight="semiBold">
        {title}
      </Text>
      <View>{endAction}</View>
    </View>
  );
};

export default NavigationHeader;
