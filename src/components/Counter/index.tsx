import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import {appColors} from '../../theme/colors';
import IconButton from '../IconButton';
import Text from '../Text';
const Counter = () => {
  const [counter, setCounter] = useState(1);
  const addButtonHandler = useCallback(() => {
    if (counter < 10) setCounter(prev => prev + 1);
  }, [counter]);

  const removeButtonHandler = useCallback(() => {
    if (counter > 0) setCounter(prev => prev - 1);
  }, [counter]);
  return (
    <View style={styles.counterConainer}>
      <IconButton
        iconName="minus-svgrepo-com-1"
        onPress={removeButtonHandler}
        isDisabled={counter === 0}
        backgroundColor={appColors.white}
        iconColor={appColors.black}
        isRounded
        iconSize="small"
      />
      <View style={styles.counterText}>
        <Text fontWeight="medium" textAlign="center">
          {counter}
        </Text>
      </View>
      <IconButton
        iconName="plus-icon-2"
        onPress={addButtonHandler}
        isDisabled={counter === 10}
        isRounded
        backgroundColor={appColors.primary}
        iconColor={appColors.white}
        iconSize="small"
      />
    </View>
  );
};

export default Counter;
