import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    contentContainer: {
      paddingHorizontal: 24,
    },
  });
export default styles;
