import React, {useCallback, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../../../components';
import {isArabic} from '../../../../localization/i18next';
import {changeLanguage} from '../../../../utils';
import AppImages from '../../../../assets/app_images';
import {useTranslation} from 'react-i18next';
import {LanguageRadioButton} from '../../components';

export default function Language() {
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    isArabic ? 'ar' : 'en',
  );
  const changeRadioIdHandler = useCallback(
    (currentValue: string) => {
      if (currentValue !== selectedLanguage) {
        setSelectedLanguage(currentValue);
        changeLanguage(isArabic ? 'en' : 'ar');
      }
    },
    [selectedLanguage],
  );

  return (
    <MainLayout
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title={t('language')}
        />
      }
      isHeaderFixed>
      <RadioButton.Group
        onValueChange={changeRadioIdHandler}
        value={selectedLanguage}>
        {LanguageRadioButton('en', t('english'), AppImages.usa)}
        {LanguageRadioButton('ar', t('arabic'), AppImages.egypt)}
      </RadioButton.Group>
    </MainLayout>
  );
}
