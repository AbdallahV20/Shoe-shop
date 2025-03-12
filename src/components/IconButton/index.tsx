import {Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAppTheme} from '../../theme';
import Icon from '../Icon';
import {moderateScale} from '../../utils';

interface ButtonProps {
  onPress?: () => void;
  iconName: string;
  iconSize?: number;
  isDisabled?: boolean;
  isBorder?: boolean;
  isRounded?: boolean;
}
const IconButton = ({
  iconName,
  iconSize = 16,
  onPress,
  isDisabled,
  isBorder,
  isRounded,
}: ButtonProps) => {
  const {theme} = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      style={styles(theme, isBorder, isRounded).container}
      disabled={isDisabled}>
      <Icon
        name={iconName}
        size={moderateScale(iconSize)}
        color={isDisabled ? theme.secondaryText : theme?.primaryText}
      />
    </Pressable>
  );
};

export default IconButton;
