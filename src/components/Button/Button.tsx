import {View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../Text/Text';

interface ButtonProps {
  size?: 'medium' | 'large';
  onPress?: () => void;
  title?: string;
  icon?: React.ReactNode;
}
const Button = ({size = 'medium', title, icon, onPress}: ButtonProps) => {
  return (
    <View>
      <Pressable onPress={onPress} style={styles(size).container}>
        {title && (
          <Text
            fontWeight="semiBold"
            textAlign="center"
            fontSize={16}
            style={styles(size).text}>
            {title as string}
          </Text>
        )}
        {icon && <View style={styles().iconContainer}>{icon}</View>}
      </Pressable>
    </View>
  );
};

export default Button;
