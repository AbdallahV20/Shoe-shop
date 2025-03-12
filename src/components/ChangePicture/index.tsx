import React, {Alert, Platform, Pressable, View} from 'react-native';
import Text from '../Text';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import {useAppTheme} from '../../theme';
import AppBottomSheet from '../AppBottomSheet';
import IconButton from '../IconButton';
import styles from './styles';
import {deleteData, moderateScale, storeData} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {SheetManager} from 'react-native-actions-sheet';
import {MMKV_KEYS} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {addImageProfile} from '../../store/slices/user.slice';
const ChangePicture = () => {
  const {theme} = useAppTheme();
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const requestCameraPermission = async (): Promise<boolean> => {
    const permission =
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA;
    const result = await request(permission);
    return result === RESULTS.GRANTED;
  };
  const requestGalleryPermission = async (): Promise<boolean> => {
    const permission =
      Platform.OS === 'android'
        ? Platform.Version > 33
          ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        : PERMISSIONS.IOS.PHOTO_LIBRARY;
    const result = await request(permission);
    return result === RESULTS.GRANTED;
  };
  const onCameraPress = async () => {
    const hasPermission = await requestCameraPermission();
    if (hasPermission) {
      launchCamera({mediaType: 'photo'}, response => {
        if (
          !response.didCancel &&
          !response.errorCode &&
          response.assets &&
          response.assets.length > 0
        ) {
          dispatch(addImageProfile(response.assets[0].uri || null));
          storeData(MMKV_KEYS.PROFILE_IMAGE, response.assets[0].uri);
          SheetManager.hide('change-picture-sheet');
        }
      });
    } else {
      Alert.alert('Permission denied', 'Camera permission is required.');
    }
  };

  const onGalleryPress = async () => {
    const hasPermission = await requestGalleryPermission();
    if (hasPermission) {
      launchImageLibrary({mediaType: 'photo'}, response => {
        if (
          !response.didCancel &&
          !response.errorCode &&
          response.assets &&
          response.assets.length > 0
        ) {
          dispatch(addImageProfile(response.assets[0].uri || null));
          storeData(MMKV_KEYS.PROFILE_IMAGE, response.assets[0].uri || null);
          SheetManager.hide('change-picture-sheet');
        }
      });
    } else {
      Alert.alert('Permission denied', 'Gallery permission is required.');
    }
  };

  const onDeletePress = () => {
    deleteData(MMKV_KEYS.PROFILE_IMAGE);
    dispatch(addImageProfile(undefined));
    SheetManager.hide('change-picture-sheet');
  };
  return (
    <AppBottomSheet
      sheetName={'change-picture-sheet'}
      leftComponent={
        <IconButton
          isDisabled={!userData.imageProfile}
          iconName="garbage-svgrepo-com"
          onPress={onDeletePress}
        />
      }
      sheetContent={
        <View style={styles(theme).container}>
          <Pressable
            style={styles(theme).optionContainer}
            onPress={onCameraPress}>
            <Icon
              name="camera-svgrepo-com-2"
              color={appColors.white}
              style={styles(theme).icon}
              size={moderateScale(21)}
            />
            <Text fontSize={12}>Camera</Text>
          </Pressable>
          <Pressable
            style={styles(theme).optionContainer}
            onPress={onGalleryPress}>
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
