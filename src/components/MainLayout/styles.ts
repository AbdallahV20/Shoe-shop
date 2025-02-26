import {StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import {pxH} from '../../utils';
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      ...layout.flex_1,
      backgroundColor: theme.backgroundColor,
    },
    contentContainer: {
      ...gutters.px_24,
      paddingBottom: pxH(24) + pxH(85), //Bottom tab height
      ...gutters.pt_8,
    },
  });
export default styles;
