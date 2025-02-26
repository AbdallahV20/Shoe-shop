import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {useAppTheme} from '../../theme';
import styles from './styles';
interface InfoProps {
  title: string | number;
  icon?: React.ReactNode;
  isBorder?: boolean;
  size?: 'medium' | 'large';
}

const Info = ({title, icon, isBorder, size = 'medium'}: InfoProps) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles(theme, icon, isBorder, size).container}>
      {icon && icon}
      <Text textAlign="center" color={theme.primaryText} fontWeight="medium">
        {title}
      </Text>
    </View>
  );
};

export default Info;
