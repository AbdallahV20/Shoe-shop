import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {COLORS} from '../../theme/colors';
import {useAppTheme} from '../../theme';
import styles from './styles';
interface InfoProps {
  title: string | number;
  icon?: React.ReactNode;
  isBorder?: boolean;
  color?: 'gray' | 'white';
}

const Info = ({title, icon, isBorder, color}: InfoProps) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles(theme, icon, isBorder).container}>
      {icon && icon}
      <Text
        color={color === 'gray' ? COLORS.gray100 : COLORS.white}
        fontWeight="medium">
        {title}
      </Text>
    </View>
  );
};

export default Info;
