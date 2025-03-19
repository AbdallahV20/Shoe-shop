import {Image, Pressable} from 'react-native';
import React, {useMemo} from 'react';
import styles from './styles';
import {AppImages} from '../../assets/app_images';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  isSquare?: boolean;
  localImage?: string;
  imageUrl?: string;
  onPress?: () => void;
  isGirl?: boolean;
  pointerEvents?: 'none' | 'auto';
}
const Avatar = ({
  size = 'medium',
  isSquare,
  localImage,
  imageUrl,
  onPress,
  isGirl,
  pointerEvents = 'auto',
}: AvatarProps) => {
  const user = useSelector((state: RootState) => state.user);
  // Memoize imageSource so it's only recalculated if dependencies change
  const imageSource = useMemo(() => {
    if (imageUrl) return {uri: imageUrl};
    if (localImage) return localImage;
    if (user.imageProfile) return {uri: user.imageProfile};
    return isGirl ? AppImages.girl : AppImages.boy;
  }, [imageUrl, localImage, user.imageProfile, isGirl]);
  return (
    <Pressable
      style={styles(size, isSquare).container}
      onPress={onPress}
      pointerEvents={pointerEvents}>
      <Image source={imageSource} style={styles().image} resizeMode="cover" />
    </Pressable>
  );
};

export default Avatar;
