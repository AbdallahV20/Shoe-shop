import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Theme} from '../../constants';
const statusBarHeight = getStatusBarHeight();
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: statusBarHeight + 16,
      paddingHorizontal: 24,
      backgroundColor: theme.backgroundColor,
    },
    contentContainer: {
      marginTop: 24,
    },
  });
export default styles;
