//margin and position doesn't work for content container style
import {StyleSheet} from 'react-native';
import {layout, Theme} from '../../constants';
export const styles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      ...layout.flex_1,
      backgroundColor: theme.backgroundColor,
    },
    fixedContainer: {
      ...layout.flex_1,
    },
    scrollableContainer: {
      ...layout.flexGrow_1,
    },
  });
export default styles;
