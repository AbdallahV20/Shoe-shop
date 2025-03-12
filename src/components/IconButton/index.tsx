import {Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAppTheme} from '../../theme';
import Icon from '../Icon';
import {moderateScale} from '../../utils';

interface ButtonProps {
  onPress: () => void;
  iconName: string;
  iconSize?: number;
  isDisabled?: boolean;
  isBorder?: boolean;
  isRounded?: boolean;
  backgroundColor?: string;
  iconColor?: string;
}
const IconButton = ({
  iconName,
  iconSize = 16,
  onPress,
  isDisabled,
  isBorder,
  isRounded,
  backgroundColor,
  iconColor,
}: ButtonProps) => {
  const {theme} = useAppTheme();
  return (
    <Pressable
      onPress={onPress}
      style={styles(theme, isBorder, isRounded, backgroundColor).container}
      disabled={isDisabled}>
      <Icon
        name={iconName}
        size={moderateScale(iconSize)}
        color={
          iconColor ?? (isDisabled ? theme.secondaryText : theme?.primaryText)
        }
      />
    </Pressable>
  );
};

export default IconButton;
