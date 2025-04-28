import React from 'react';
import {Image, ImageProps, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Text} from '../../../../components';
import {useAppTheme} from '../../../../theme';
import styles from './styles';
export const LanguageRedioButton = (
  language: string,
  label: string,
  flag: ImageProps,
) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles.optionContainer}>
      <RadioButton
        value={language}
        color={theme.primaryText}
        uncheckedColor={theme.secondaryText}
      />
      <View style={styles.valueLanguage}>
        <Image source={flag} style={styles.flag} />
        <Text>{label}</Text>
      </View>
    </View>
  );
};

export default LanguageRedioButton;
