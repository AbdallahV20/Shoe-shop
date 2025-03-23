import {FlatList, Pressable} from 'react-native';
import React, {useCallback, useRef} from 'react';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import styles from './styles';
import {useAppTheme} from '../../theme';
interface TabsProps {
  tabs: string[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

interface tabProps {
  item: string;
  index: number;
}
const Tabs = ({tabs, activeTab, setActiveTab}: TabsProps) => {
  const {theme} = useAppTheme();
  const tabsRef = useRef<FlatList>(null);
  const handleOnPress = useCallback(
    (_: unknown, index: number) => {
      setActiveTab(() => index);
      tabsRef?.current?.scrollToIndex({
        index,
        viewPosition: 0.5,
        animated: true,
      });
    },
    [setActiveTab],
  );

  const tabItem = ({item, index}: tabProps) => (
    <Pressable onPress={() => handleOnPress(item, index)}>
      <Text
        style={[
          styles(theme).tabContainer,
          activeTab === index
            ? styles(theme).activeTabContainer
            : styles(theme).inactiveTabColor,
        ]}
        fontWeight="medium"
        color={activeTab === index ? appColors.white : theme.primaryText}>
        {item}
      </Text>
    </Pressable>
  );
  return (
    <FlatList
      ref={tabsRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles(theme).tabsContainer}
      data={tabs}
      keyExtractor={item => item}
      renderItem={tabItem}
    />
  );
};

export default Tabs;
