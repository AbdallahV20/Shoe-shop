import {ViewStyle} from 'react-native';
import {Text as ReactNativeText} from 'react-native';
import React from 'react';
import appFonts from '../../assets/fonts';
import {useAppTheme} from '../../theme';
import {moderateScale} from '../../utils';
interface TextProps {
  fontSize?: number;
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
  children?: string | number;
  style?: ViewStyle;
  icon?: React.ReactNode;
  numberOfLines?: number;
}
const Text = ({
  fontSize = 16,
  fontWeight = 'regular',
  textAlign,
  children,
  color,
  style,
  numberOfLines,
}: TextProps) => {
  const {theme} = useAppTheme();
  return (
    <ReactNativeText
      style={[
        {
          fontFamily: appFonts[fontWeight],
          fontSize: moderateScale(fontSize),
          textAlign,
          color: color ?? theme.primaryText,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </ReactNativeText>
  );
};

export default Text;
