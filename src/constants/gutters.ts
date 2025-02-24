import {StyleSheet, ViewStyle} from 'react-native';

type SpacingValues = 2 | 4 | 8 | 12 | 16 | 24 | 28 | 32 | 40;

type SpacingPrefix =
  | 'm'
  | 'mt'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'ms'
  | 'me'
  | 'p'
  | 'pt'
  | 'pb'
  | 'pl'
  | 'pr'
  | 'ps'
  | 'pe'
  | 'px'
  | 'py'
  | 'mx'
  | 'my'
  | 'gap';

type SpacingTypes = {
  [key in `${SpacingPrefix}_${SpacingValues}`]: ViewStyle;
};
const spacingValues: SpacingValues[] = [2, 4, 8, 12, 16, 24, 28, 32, 40];

const generateSpacing = (): SpacingTypes => {
  const styles: any = {};

  spacingValues.forEach(size => {
    styles[`m_${size}`] = {margin: size};
    styles[`mt_${size}`] = {marginTop: size};
    styles[`mb_${size}`] = {marginBottom: size};
    styles[`ml_${size}`] = {marginLeft: size};
    styles[`mr_${size}`] = {marginRight: size};
    styles[`ms_${size}`] = {marginStart: size};
    styles[`me_${size}`] = {marginEnd: size};

    styles[`p_${size}`] = {padding: size};
    styles[`pt_${size}`] = {paddingTop: size};
    styles[`pb_${size}`] = {paddingBottom: size};
    styles[`pl_${size}`] = {paddingLeft: size};
    styles[`pr_${size}`] = {paddingRight: size};
    styles[`ps_${size}`] = {paddingStart: size};
    styles[`pe_${size}`] = {paddingEnd: size};

    styles[`px_${size}`] = {paddingHorizontal: size};
    styles[`py_${size}`] = {paddingVertical: size};
    styles[`mx_${size}`] = {marginHorizontal: size};
    styles[`my_${size}`] = {marginVertical: size};
  });

  return styles as SpacingTypes;
};

export const gutters = StyleSheet.create(generateSpacing());
