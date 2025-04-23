import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import styles from './styles';
import {useAppTheme} from '../../theme';
import {px} from '../../utils';
interface NavigationHeaderProps {
  startAction?: React.ReactNode;
  title?: string;
  endAction?: React.ReactNode;
  isTransparent?: boolean;
}
const NavigationHeader = ({
  startAction,
  title,
  endAction,
  isTransparent,
}: NavigationHeaderProps) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles(theme, isTransparent).container}>
      <View style={{width: startAction ? undefined : px(36)}}>
        {startAction}
      </View>
      <Text fontSize={16} textAlign="center" fontWeight="semiBold">
        {title}
      </Text>
      <View style={{width: endAction ? undefined : px(36)}}>{endAction}</View>
    </View>
  );
};

export default React.memo(NavigationHeader);
