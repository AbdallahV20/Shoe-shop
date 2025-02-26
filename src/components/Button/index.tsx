import {View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../Text';
import {useAppTheme} from '../../theme';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
  title?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  isBorder?: boolean;
  variant?: 'transparent' | 'main' | 'theming';
}
const Button = ({
  size = 'medium',
  title,
  icon,
  onPress,
  isDisabled,
  variant = 'main',
}: ButtonProps) => {
  const {theme} = useAppTheme();
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={[styles(theme, size, isDisabled, variant).container]}
        disabled={isDisabled}>
        {title && (
          <Text
            fontWeight="semiBold"
            textAlign="center"
            fontSize={16}
            style={styles(theme, size, isDisabled, variant).text}>
            {title}
          </Text>
        )}
        {icon && <View style={styles().iconContainer}>{icon}</View>}
      </Pressable>
    </View>
  );
};

export default Button;
