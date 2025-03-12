import React, {useCallback, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {
  Text,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../../../components';
import {isArabic} from '../../../../localization/i18next';
import {changeLanguage} from '../../../../utils';
import {useAppTheme} from '../../../../theme';
import {Image, View} from 'react-native';
import AppImages from '../../../../assets/app_images';
import styles from './styles';
import {useTranslation} from 'react-i18next';

export default function Language() {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const [value, setValue] = useState<string>(isArabic ? 'ar' : 'en');
  const changeRadioIdHandler = useCallback(
    (currentValue: string) => {
      setValue(currentValue);
      if (currentValue !== value) changeLanguage(isArabic ? 'en' : 'ar');
    },
    [value],
  );
  return (
    <MainLayout
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title={t('language')}
        />
      }>
      <RadioButton.Group onValueChange={changeRadioIdHandler} value={value}>
        <View style={styles.optionContainer}>
          <RadioButton
            value="en"
            color={theme.primaryText}
            uncheckedColor={theme.secondaryText}
          />
          <View style={styles.valueLanguage}>
            <Image source={AppImages.usa} style={styles.flag} />
            <Text>{t('english')}</Text>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <RadioButton
            value="ar"
            color={theme.primaryText}
            uncheckedColor={theme.secondaryText}
          />
          <View style={styles.valueLanguage}>
            <Image source={AppImages.egypt} style={styles.flag} />
            <Text>{t('arabic')}</Text>
          </View>
        </View>
      </RadioButton.Group>
    </MainLayout>
  );
}
