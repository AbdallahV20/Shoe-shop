import {View, FlatList, Pressable} from 'react-native';
import React, {useCallback, useRef} from 'react';
import Text from '../Text';
import {COLORS} from '../../theme/colors';

interface TabsProps {
  tabs: string[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}
const Tabs = ({tabs, activeTab, setActiveTab}: TabsProps) => {
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
  return (
    <FlatList
      ref={tabsRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 21}}
      data={tabs}
      keyExtractor={item => item}
      renderItem={({item, index}) => (
        <Pressable onPress={() => handleOnPress(item, index)}>
          <Text
            fontWeight="semiBold"
            color={activeTab === index ? COLORS.orange : COLORS.gray200}>
            {item}
          </Text>
          {activeTab === index && (
            <View
              style={{
                alignSelf: 'center',
                width: '90%',
                height: 5,
                backgroundColor: COLORS.orange,
                marginTop: 4,
                borderRadius: 20,
              }}
            />
          )}
        </Pressable>
      )}
    />
  );
};

export default Tabs;
