import {StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';

const styles = () =>
  StyleSheet.create({
    contentContainer: {
      ...gutters.gapH_16,
      ...gutters.px_24,
      ...layout.flexGrow_1, //this is for the empty component to take the whole vertical space
    },
  });

export default styles;
