import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {COLORS} from '../../theme/colors';
import {useAppTheme} from '../../theme';
import styles from './styles';
interface InfoProps {
  title: string;
  icon?: React.ReactNode;
}

const Info = ({title, icon}: InfoProps) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles(theme, icon).container}>
      {icon && icon}
      <Text color={COLORS.gray100} fontWeight="medium">
        {title}
      </Text>
    </View>
  );
};

export default Info;
