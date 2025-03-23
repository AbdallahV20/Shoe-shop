import React from 'react';
import TextInput from '../TextInput';
import IconButton from '../IconButton';
import {useAppTheme} from '../../theme';
import {View} from 'react-native';

interface SearchBarProps {
  value: string;
  setValue: (val: string) => void;
}
export default function SearchBar({value, setValue}: SearchBarProps) {
  const {theme} = useAppTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}>
      <View style={{flex: 1}}>
        <TextInput
          value={value}
          setValue={setValue}
          isSearchBar
          placeholder="Search"
        />
      </View>
      <IconButton
        iconName="preferences-1"
        backgroundColor={theme.textInputBackground}
        onPress={() => console.log('Filter')}
        iconColor={theme.primaryText}
        iconSize="large"
      />
    </View>
  );
}
