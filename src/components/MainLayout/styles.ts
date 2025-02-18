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
      paddingBottom: 24 + 85,
      paddingTop: 8,
    },
  });
export default styles;
