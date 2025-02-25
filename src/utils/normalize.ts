import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const guidelineBaseWidth = 375; // Base width (iPhone 11)
const guidelineBaseHeight = 812; // Base height (iPhone 11)

/**
for width, marginStart, paddingHorizontal, marginLeft
 */
export const px = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
for height, marginTop, paddingVertical, marginBottom
 */
export const pxH = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;

/**
for borderRadius, fontSize.
 */
export const moderateScale = (size: number, factor = 0.5) =>
  size + (px(size) - size) * factor;
