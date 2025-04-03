import {Dimensions, StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
const {width} = Dimensions.get('window');
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      ...layout.row,
      ...gutters.p_16,
      ...gutters.radius_16,
      ...gutters.gap_16,
      backgroundColor: theme.cardBackground,
    },
    image: {
      width: width * 0.4,
      ...gutters.radius_16,
      ...gutters.p_8,
      ...layout.overflowHidden,
      ...layout.itemsEnd,
    },
    rightContainer: {...gutters.gapH_8, ...layout.flex_1},
    buttonContainer: {...layout.selfEnd},
  });
export default styles;
