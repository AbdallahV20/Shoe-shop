import {TextInput as TextInputBase, View} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {useAppTheme} from '../../theme';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import Icon from '../Icon';
import {px} from '../../utils';

interface textInputProps {
  value: string;
  setValue: (val: string) => void;
  isSearchBar?: boolean;
  label?: string;
  errorMessage?: string;
  placeholder: string;
}

const TextInput = ({
  value,
  setValue,
  isSearchBar,
  label,
  errorMessage,
  placeholder,
}: textInputProps) => {
  const {theme} = useAppTheme();
  const onChangeHandler = useCallback(
    (val: string) => {
      setValue(val);
    },
    [setValue],
  );
  return (
    <View style={styles(theme).container}>
      {label && <Text fontWeight="semiBold">{label}</Text>}
      <View style={styles(theme).textInputAndErr}>
        <View style={styles(theme).textInputContainer}>
          {isSearchBar && (
            <View style={styles(theme).searchIconContainer}>
              <Icon name="search" size={px(18)} color={appColors.gray400} />
            </View>
          )}
          <TextInputBase
            placeholder={placeholder}
            placeholderTextColor={appColors.gray400}
            style={styles(theme).textInput}
            selectionColor={appColors.primary}
            value={value}
            cursorColor={appColors.primary}
            onChangeText={onChangeHandler}
            numberOfLines={1}
          />
        </View>
        {errorMessage && (
          <Text color={appColors.red} fontSize={14}>
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextInput;
