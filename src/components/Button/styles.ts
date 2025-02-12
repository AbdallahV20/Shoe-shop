import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
export const styles = (size?: string, isDisabled?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDisabled ? COLORS.orange100 : COLORS.orange,
      borderRadius: size === 'medium' ? 10 : 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: COLORS.white,
      paddingVertical: size === 'medium' ? 10 : 20,
    },
    iconContainer: {
      padding: 12,
    },
  });

export default styles;
