import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {Theme} from '../../constants';
export const styles = (
  theme?: Theme,
  size?: string,
  isDisabled?: boolean,
  isBorder?: boolean,
  variant?: 'transparentButton' | 'orangeButton' | 'themingButton',
) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDisabled
        ? COLORS.orange100
        : isBorder
        ? theme?.backgroundColor
        : variant === 'orangeButton'
        ? COLORS.orange
        : variant === 'transparentButton'
        ? 'transparent'
        : theme?.backgroundColor,
      borderRadius: size === 'medium' ? 10 : 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: isBorder ? 2 : 0,
      borderColor: COLORS.orange,
    },
    text: {
      color: isBorder ? COLORS.orange : COLORS.white,
      padding:
        variant === 'transparentButton' ? 0 : size === 'medium' ? 10 : 20,
    },
    iconContainer: {
      padding: 12,
    },
  });

export default styles;
