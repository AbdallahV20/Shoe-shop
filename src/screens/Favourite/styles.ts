import {StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';

const styles = () =>
  StyleSheet.create({
    contentContainer: {
      ...gutters.gapH_16,
      ...gutters.pb_24,
      ...gutters.px_24,
      ...layout.flexGrow_1, //this is for the empty component to take the whole vertical space
    },
    emptyListContainer: {
      ...layout.flex_1,
      ...layout.allCenter,
      ...gutters.gapH_16,
    },
    emptyListImage: {width: '70%', height: '40%'},
    emptyTextContainer: {
      ...layout.fullWidth,
      ...gutters.gapH_8,
    },
  });

export default styles;
