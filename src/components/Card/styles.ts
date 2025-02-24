import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';
export const styles = (theme: Theme, isDarkMode?: boolean) =>
  StyleSheet.create({
    cardContainer: {
      borderRadius: 24,
      shadowColor: isDarkMode ? '' : '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    container: {
      padding: 12,
      gap: 16,
    },
    imageContainer: {
      borderRadius: 24,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rateContainer: {
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingHorizontal: 14,
      paddingVertical: 2,
      position: 'absolute',
      top: 0,
      end: 0,
      borderBottomLeftRadius: 26,
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
export default styles;
