import {TextInput as TextInputBase, View} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {useTheme} from '../../theme';
import Text from '../Text';
import {COLORS} from '../../theme/colors';
import Icon from '../Icon';

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
  const {theme} = useTheme();
  const onChangeHandler = useCallback(
    (val: string) => {
      setValue(val);
    },
    [setValue],
  );
  return (
    <View style={styles(theme).container}>
      {label && (
        <Text color={theme.textColor} fontWeight="semiBold">
          {label}
        </Text>
      )}
      <View style={styles(theme).textInputAndErr}>
        <View style={styles(theme).textInputContainer}>
          {isSearchBar && (
            <View style={styles(theme).iconContainer}>
              <Icon name="search" size={18} color={COLORS.gray400} />
            </View>
          )}
          <TextInputBase
            placeholder={placeholder}
            placeholderTextColor={COLORS.gray400}
            style={styles(theme).textInput}
            selectionColor={theme.textColor}
            value={value}
            onChangeText={onChangeHandler}
          />
        </View>
        {errorMessage && (
          <Text color={COLORS.red} fontSize={14}>
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextInput;
