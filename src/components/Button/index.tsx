import {FlexAlignType, Pressable, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../Text';
import {useAppTheme} from '../../theme';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import {moderateScale} from '../../utils';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
  title?: string;
  iconName?: string;
  isDisabled?: boolean;
  isBorder?: boolean;
  variant?: 'transparent' | 'main' | 'theming';
  style?: ViewStyle;
  alignSelf?: FlexAlignType;
}
const Button = ({
  size = 'medium',
  title,
  iconName,
  onPress,
  isDisabled,
  variant = 'main',
  style,
  alignSelf = 'flex-start',
}: ButtonProps) => {
  const {theme} = useAppTheme();
  const dynamicSize = size === 'small' ? 12 : size === 'medium' ? 14 : 16;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles(theme, size, isDisabled, variant, alignSelf).container,
        style,
      ]}
      disabled={isDisabled}>
      {title && (
        <Text
          fontWeight="semiBold"
          textAlign="center"
          fontSize={dynamicSize}
          style={styles(theme, size, isDisabled, variant).text}>
          {title}
        </Text>
      )}
      {iconName && (
        <Icon
          name={iconName}
          size={moderateScale(dynamicSize)}
          color={variant === 'main' ? appColors.white : theme?.primaryText}
        />
      )}
    </Pressable>
  );
};

export default Button;
