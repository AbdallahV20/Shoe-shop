//extend any props for a general component
import {TextInput as TextInputBase, TextInputProps, View} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {useAppTheme} from '../../theme';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import Icon from '../Icon';
import {px} from '../../utils';
import {isArabic} from '../../localization/i18next';

interface textInputProps extends TextInputProps {
  value: string;
  setValue: (val: string) => void;
  isSearchBar?: boolean;
  label?: string;
  errorMessage?: string;
}

const TextInput = ({
  value,
  setValue,
  isSearchBar,
  label,
  errorMessage,
  ...otherProps
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
              <Icon name="search-1" size={px(18)} color={theme.primaryText} />
            </View>
          )}
          <TextInputBase
            placeholderTextColor={theme.secondaryText}
            style={styles(theme).textInput}
            selectionColor={appColors.primary}
            value={value}
            cursorColor={appColors.primary}
            onChangeText={onChangeHandler}
            numberOfLines={1}
            textAlign={isArabic ? 'right' : 'left'}
            {...otherProps}
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
