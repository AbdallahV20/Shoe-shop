import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';
import {COLORS} from '../../theme/colors';

export const styles = (
  theme: Theme,
  icon: React.ReactNode,
  iBorder?: boolean,
) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      borderWidth: iBorder ? 2 : 0,
      borderColor: COLORS.orange,
      borderRadius: 12,
      paddingHorizontal: icon ? 10 : 28,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
  });
export default styles;
