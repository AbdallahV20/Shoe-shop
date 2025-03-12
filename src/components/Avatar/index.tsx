import {Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppImages} from '../../assets/app_images';
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
  return (
    <Pressable
      style={styles(size, isSquare).container}
      onPress={onPress}
      pointerEvents={pointerEvents}>
      <Image
        source={
          uploadedImage
            ? {uri: uploadedImage}
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
