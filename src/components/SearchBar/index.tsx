import React, {useCallback, useState} from 'react';
import TextInput from '../TextInput';
import IconButton from '../IconButton';
import {useAppTheme} from '../../theme';
import {StyleSheet, View} from 'react-native';
import {gutters, layout} from '../../constants';
import {useTranslation} from 'react-i18next';

export const SearchBar = ({
  onSearch,
  onSearchPress,
  onSearchSubmit,
  onFilter,
  isAutoFocus,
}: {
  onSearch?: (val: string) => void;
  onSearchPress?: () => void;
  onSearchSubmit?: () => void;
  onFilter?: () => void;
  isAutoFocus?: boolean;
}) => {
  const {theme} = useAppTheme();
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const handleOnSearch = useCallback(
    (value: string) => {
      setSearch(value);
      onSearch?.(value);
    },
    [onSearch],
  );
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          value={search || ''}
          setValue={value => handleOnSearch(value)}
          isSearchBar
          placeholder={t('search')}
          autoFocus={isAutoFocus}
          onPress={onSearchPress}
          onSubmitEditing={onSearchSubmit}
        />
      </View>
      {onFilter && (
        <IconButton
          iconName="preferences-1"
          backgroundColor={theme.textInputBackground}
          onPress={onFilter}
          iconColor={theme.primaryText}
          iconSize="intermediate"
        />
      )}
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
