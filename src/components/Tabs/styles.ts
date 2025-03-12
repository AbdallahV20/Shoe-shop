import {StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';
import {appColors} from '../../theme/colors';
import {pxH} from '../../utils';

export const styles = StyleSheet.create({
  tabsContainer: {...gutters.gap_18},
  selectedTabBorder: {
    ...layout.selfCenter,
    width: '90%',
    height: pxH(5),
    backgroundColor: appColors.primary,
    ...gutters.mt_4,
    ...gutters.radius_18,
  },
});
export default styles;
