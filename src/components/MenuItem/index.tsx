import {Pressable, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useAppTheme} from '../../theme';
import Icon from '../Icon';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Toggle from '../Toggle';
import {moderateScale} from '../../utils';
import {isArabic} from '../../localization/i18next';
import {useTranslation} from 'react-i18next';
import {logOut} from '../../firebase';
interface MenuItemProps {
  title: string;
  iconName: string;
  screenName?: string;
  onPressHandler?: () => void;
}
const MenuItem = ({title, iconName, screenName}: MenuItemProps) => {
  const {theme, toggleTheme, isDarkMode} = useAppTheme();
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const {t} = useTranslation();
  const onChangeModeHandler = useCallback(
    (isOn: boolean) => {
      toggleTheme();
      setDarkMode(isOn);
    },
    [toggleTheme],
  );
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={async () => {
        await logOut().then(() => navigation.navigate(screenName as never));
      }}
      style={styles(theme, screenName).container}>
      <View style={styles(theme).rowContainer}>
        <View style={styles(theme).iconContainer}>
          <Icon
            name={iconName}
            size={moderateScale(18)}
            color={appColors.primary}
          />
        </View>
        <Text fontWeight="medium">{title}</Text>
      </View>
      {title === t('darkMode') ? (
        <Toggle isOn={darkMode} onToggle={onChangeModeHandler} />
      ) : (
        <Icon
          name={isArabic ? 'arrow-left-2' : 'arrow-right-2'}
          size={moderateScale(16)}
          color={theme.primaryText}
        />
      )}
    </Pressable>
  );
};

export default React.memo(MenuItem);
