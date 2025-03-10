import React, {Pressable, View} from 'react-native';
import Text from '../Text';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import {useAppTheme} from '../../theme';
import AppBottomSheet from '../AppBottomSheet';
import IconButton from '../IconButton';
import styles from './styles';
import {moderateScale} from '../../utils';

const ChangePicture = () => {
  const {theme} = useAppTheme();
  return (
    <AppBottomSheet
      sheetName={'change-picture-sheet'}
      leftComponent={
        <IconButton
          iconName="garbage-svgrepo-com"
          onPress={() => console.log('delete image')}
        />
      }
      sheetContent={
        <View style={styles(theme).container}>
          <Pressable style={styles(theme).optionContainer}>
            <Icon
              name="camera-svgrepo-com-2"
              color={appColors.white}
              style={styles(theme).icon}
              size={moderateScale(21)}
            />
            <Text fontSize={12}>Camera</Text>
          </Pressable>
          <Pressable style={styles(theme).optionContainer}>
            <Icon
              name="picture-photo-image-svgrepo-com"
              color={appColors.white}
              style={styles(theme).icon}
              size={moderateScale(21)}
            />
            <Text fontSize={12}>Gallery</Text>
          </Pressable>
        </View>
      }
    />
  );
};

export default ChangePicture;
