import {Pressable, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import styles from './styles';
interface SectionHeaderProps {
  sectionTitle: string;
  onViewAllPress: () => void;
}
const SectionHeader = ({sectionTitle, onViewAllPress}: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text fontSize={21} fontWeight="medium">
        {sectionTitle}
      </Text>
      <Pressable onPress={onViewAllPress}>
        <Text fontSize={12} color={appColors.orange}>
          View All
        </Text>
      </Pressable>
    </View>
  );
};

export default SectionHeader;
