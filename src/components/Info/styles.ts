import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = (theme: Theme, icon: React.ReactNode) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      borderRadius: 12,
      padding: icon ? 10 : 18,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
  });
export default styles;
