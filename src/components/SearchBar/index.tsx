import React from 'react';
import TextInput from '../TextInput';
import IconButton from '../IconButton';
import {useAppTheme} from '../../theme';
import {StyleSheet, View} from 'react-native';
import {gutters, layout} from '../../constants';

interface SearchBarProps {
  value: string;
  setValue: (val: string) => void;
}
export const SearchBar = ({value, setValue}: SearchBarProps) => {
  const {theme} = useAppTheme();
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
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
        iconSize="intermediate"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...layout.row,
    ...layout.itemsCenter,
    ...gutters.gap_8,
  },
  textInput: {
    ...layout.flex_1,
  },
});
export default SearchBar;
