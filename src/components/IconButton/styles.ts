import {StyleSheet} from 'react-native';
import {layout, Theme} from '../../constants';
import {moderateScale, px} from '../../utils';
import {appColors} from '../../theme/colors';

export const styles = (
  theme: Theme,
  isDisabled?: boolean,
  isBorder?: boolean,
  isRounded?: boolean,
) =>
  StyleSheet.create({
    container: {
      ...layout.allCenter,
      padding: isBorder ? px(8) : 0,
      borderWidth: isBorder ? px(2) : 0,
      borderColor: appColors.orange,
      borderRadius: isRounded ? moderateScale(100) : moderateScale(10),
    },
  });

export default styles;
