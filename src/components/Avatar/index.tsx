import {Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppImages} from '../../assets/app_images';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  isSquare?: boolean;
  uploadedImage?: string;
  onPress?: () => void;
  isGirl?: boolean;
  pointerEvents?: 'none' | 'auto';
}
const Avatar = ({
  size = 'medium',
  isSquare,
  uploadedImage,
  onPress,
  isGirl,
  pointerEvents,
}: AvatarProps) => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Pressable
      style={styles(size, isSquare).container}
      onPress={onPress}
      pointerEvents={pointerEvents}>
      <Image
        source={
          uploadedImage
            ? {uri: uploadedImage}
            : user.imageProfile
            ? {uri: user.imageProfile}
            : isGirl
            ? AppImages.girl
            : AppImages.boy
        }
        style={styles().image}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default Avatar;
