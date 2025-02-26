import {StyleSheet} from 'react-native';
import {appColors} from '../../theme/colors';
import {gutters, Theme} from '../../constants';
import {px} from '../../utils';
export const styles = (
  theme?: Theme,
  size?: 'small' | 'medium' | 'large',
  isDisabled?: boolean,
  variant?: 'transparent' | 'main' | 'theming',
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
    },
    text: {
      color: variant === 'main' ? appColors.white : theme?.primaryText,
      padding: variant === 'transparent' ? 0 : px(12),
    },
    iconContainer: {
      ...gutters.p_12,
    },
  });

export default styles;
