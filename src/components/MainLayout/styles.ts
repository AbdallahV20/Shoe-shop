import {StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import {pxH} from '../../utils';
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      ...layout.flex_1,
      paddingBottom: pxH(85), //Bottom tab height
      ...gutters.px_24,
    },
    contentContainer: {...gutters.mt_16},
  });
export default styles;
