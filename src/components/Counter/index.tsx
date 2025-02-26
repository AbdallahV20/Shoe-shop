import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Button from '../Button';
import Info from '../Info';
import styles from './styles';
import {appColors} from '../../theme/colors';
import Icon from '../Icon';
import {useAppTheme} from '../../theme';
import {px} from '../../utils';
const Counter = () => {
  const {isDarkMode} = useAppTheme();
  const [counter, setCounter] = useState(1);
  const addButtonHandler = useCallback(() => {
    if (counter < 10) setCounter(prev => prev + 1);
  }, [counter]);

  const removeButtonHandler = useCallback(() => {
    if (counter > 0) setCounter(prev => prev - 1);
  }, [counter]);
  return (
    <View style={styles.counterConainer}>
      <Button
        icon={<Icon name="minus" color={appColors.white} size={px(12)} />}
        isDisabled={counter === 0}
        onPress={removeButtonHandler}
      />
      <Info title={counter} isBorder={isDarkMode} />
      <Button
        icon={<Icon name="add" color={appColors.white} size={px(12)} />}
        isDisabled={counter === 10}
        onPress={addButtonHandler}
      />
    </View>
  );
};

export default Counter;
