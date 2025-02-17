import {View, ViewStyle} from 'react-native';
import {Text as ReactNativeText} from 'react-native';
import React from 'react';
import appFonts from '../../assets/fonts';
import {useAppTheme} from '../../theme';
interface TextProps {
  fontSize?: 10 | 12 | 14 | 16 | 20 | 24 | 28;
  fontWeight?:
    | 'regular'
    | 'medium'
    | 'bold'
    | 'italic'
    | 'extraBold'
    | 'light'
    | 'semiBold'
    | 'extraLight'
    | 'thin';
  textAlign?: 'left' | 'center' | 'right';
  color?: string;
  children?: string;
  style?: ViewStyle;
  icon?: React.ReactNode;
}
const Text = ({
  fontSize = 16,
  fontWeight = 'regular',
  textAlign,
  children,
  color,
  style,
  icon,
}: TextProps) => {
  const {theme} = useAppTheme();
  return (
    <ReactNativeText
      style={[
        {
          fontFamily: appFonts[fontWeight],
          fontSize,
          textAlign,
          color: color ?? theme.textColor,
        },
        style,
      ]}>
      {icon && <View style={{paddingEnd: 4, paddingTop: 5}}>{icon}</View>}
      {children}
    </ReactNativeText>
  );
};

export default Text;
