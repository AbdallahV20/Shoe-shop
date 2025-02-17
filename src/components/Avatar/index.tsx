import {Image, ImageSourcePropType, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppImages} from '../../assets/app_images';
interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  isSquare?: boolean;
  uploadedImage?: ImageSourcePropType;
  onPress?: () => void;
  isBoy?: boolean;
  isGirl?: boolean;
}
const Avatar = ({
  size = 'medium',
  isSquare,
  uploadedImage,
  onPress,
  isBoy,
  isGirl,
}: AvatarProps) => {
  const isAvatar = isBoy || isGirl;
  return (
    <Pressable
      style={styles(size, isSquare, isAvatar).container}
      onPress={onPress}>
      <Image
        source={
          uploadedImage ? uploadedImage : isBoy ? AppImages.boy : AppImages.girl
        }
        style={styles().image}
      />
    </Pressable>
  );
};

export default Avatar;
