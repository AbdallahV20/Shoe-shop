import React, {useState} from 'react';
import TextInput from '../TextInput';
import IconButton from '../IconButton';
import {useAppTheme} from '../../theme';
import {StyleSheet, View} from 'react-native';
import {gutters, layout} from '../../constants';

export const SearchBar = () => {
  const {theme} = useAppTheme();
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          value={search}
          setValue={setSearch}
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
    ...gutters.px_24,
  },
  textInput: {
    ...layout.flex_1,
  },
});
export default React.memo(SearchBar);
