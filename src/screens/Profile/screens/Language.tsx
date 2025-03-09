import React, {useCallback, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {
  Text,
  Icon,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../../components';
import {isArabic} from '../../../localization/i18next';
import {changeLanguage} from '../../../utils';
import {useAppTheme} from '../../../theme';
import {View} from 'react-native';

export default function Language() {
  const {theme} = useAppTheme();
  const [value, setValue] = useState<string>(isArabic ? 'ar' : 'en');
  const changeRadioIdHandler = useCallback((currentValue: string) => {
    setValue(currentValue);
    changeLanguage(isArabic ? 'en' : 'ar');
  }, []);
  return (
    <MainLayout
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title="Language"
        />
      }>
      <RadioButton.Group onValueChange={changeRadioIdHandler} value={value}>
        <View style={{alignItems: 'center', gap: 16, flexDirection: 'row'}}>
          <RadioButton value="en" color={theme.primaryText} />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon name="location" color={theme.primaryText} />
            <Text color={theme.primaryText}>English</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', gap: 16, flexDirection: 'row'}}>
          <RadioButton value="ar" color={theme.primaryText} />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon name="location" color={theme.primaryText} />
            <Text color={theme.primaryText}>Arabic</Text>
          </View>
        </View>
      </RadioButton.Group>
    </MainLayout>
  );
}
