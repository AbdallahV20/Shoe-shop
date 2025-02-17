import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

export const styles = (
  size?: 'small' | 'medium' | 'large',
  isSquare?: boolean,
  isAvatar?: boolean,
) =>
  StyleSheet.create({
    container: {
      width: size === 'small' ? 40 : size === 'medium' ? 50 : 60,
      aspectRatio: 1 / 1,
      borderRadius: isSquare ? 18 : 500,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isAvatar ? 3 : 0,
      paddingBottom: 0,
      backgroundColor: COLORS.white,
    },
    image: {width: '100%', height: '100%'},
  });

export default styles;
