import {Dimensions, StyleSheet} from 'react-native';
import {px, pxH} from '../../utils';
import {layout} from '../../constants';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export const styles = (index?: number, length?: number) =>
  StyleSheet.create({
    container: {...layout.relative},
    image: {
      width: screenWidth - px(48),
      height: screenHeight * 0.2,
      borderRadius: 10,
    },
    slider: {
      ...layout.absolute,
      left: '43%',
      bottom: pxH(8),
    },
  });

export default styles;
