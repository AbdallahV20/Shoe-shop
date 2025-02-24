import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.cardBackground,
      padding: 16,
      flexDirection: 'row',
      gap: 16,
      borderRadius: 24,
    },
    imageContainer: {
      width: '40%',
      aspectRatio: 1 / 1,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 24,
    },
    rightContainer: {
      gap: 16,
      flex: 1,
    },
    centerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    counterConainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

export default styles;
