import {Pressable, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useAppTheme} from '../../theme';
import Icon from '../Icon';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
interface MenuItemProps {
  title: string;
  icon: string;
  screenName?: string;
}
const MenuItem = ({title, icon, screenName}: MenuItemProps) => {
  const {theme, toggleTheme, isDarkMode} = useAppTheme();
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const onChangeModeHandler = useCallback(
    (isOn: boolean) => {
      setDarkMode(isOn);
      toggleTheme();
    },
    [toggleTheme],
  );
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => screenName && navigation.navigate(screenName as never)}
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: title === 'Log Out' ? 0 : 1,
        borderColor: appColors.gray100,
        paddingVertical: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
        }}>
        <View
          style={{
            backgroundColor: appColors.orange100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={icon}
            size={18}
            color={appColors.orange}
            style={{padding: 10}}
          />
        </View>
        <Text>{title}</Text>
      </View>
      {title === 'Dark Mode' ? (
        <ToggleSwitch
          isOn={darkMode}
          onColor={appColors.orange}
          offColor={appColors.gray100}
          size="medium"
          onToggle={onChangeModeHandler}
          animationSpeed={200}
        />
      ) : (
        <Icon name="left" size={18} color={theme.primaryText} />
      )}
    </Pressable>
  );
};

export default MenuItem;
