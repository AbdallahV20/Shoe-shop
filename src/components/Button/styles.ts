import {FlexAlignType, StyleSheet, TextStyle} from 'react-native';
import {appColors} from '../../theme/colors';
import {gutters, layout, Theme} from '../../constants';
import {px} from '../../utils';
export const styles = (
  theme?: Theme,
  size?: 'small' | 'medium' | 'large',
  isDisabled?: boolean,
  variant?: 'transparent' | 'main' | 'theming',
  alignSelf?: FlexAlignType,
) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDisabled
        ? appColors.orange100
        : variant === 'main'
        ? appColors.orange
        : variant === 'transparent'
        ? 'transparent'
        : theme?.cardBackground,
      ...gutters.radius_12,
      ...layout.row,
      ...layout.itemsCenter,
      ...gutters.gap_8,
      alignSelf: alignSelf,
      paddingVertical:
        variant === 'transparent'
          ? 0
          : size === 'small'
          ? px(4)
          : size === 'medium'
          ? px(6)
          : px(8),
      paddingHorizontal:
        variant === 'transparent'
          ? 0
          : size === 'small'
          ? px(6)
          : size === 'medium'
          ? px(8)
          : px(12),
    },
    text: {
      color: variant === 'main' ? appColors.white : theme?.primaryText,
    } as TextStyle,
  });

export default styles;
