import {StyleSheet} from 'react-native';
import {layout, Theme} from '../../constants';
import {moderateScale, px} from '../../utils';
import {appColors} from '../../theme/colors';

export const styles = (
  theme: Theme,
  isBorder?: boolean,
  isRounded?: boolean,
  backgroundColor?: string,
) =>
  StyleSheet.create({
    container: {
      ...layout.allCenter,
      padding: isBorder || backgroundColor ? px(10) : 0,
      borderWidth: isBorder ? px(2) : 0,
      borderColor: appColors.primary,
      borderRadius: isRounded ? moderateScale(100) : moderateScale(10),
      backgroundColor,
    },
  });

export default styles;
