import {View, FlatList, Pressable} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import Text from '../Text';
import {COLORS} from '../../theme/colors';

interface TabsProps {
  tabs: string[];
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const Tabs = ({tabs, setActiveTab}: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabsRef = useRef<FlatList>(null);
  const handleOnPress = useCallback(
    (_: unknown, index: number) => {
      setCurrentTab(index);
      tabsRef?.current?.scrollToIndex({
        index,
        viewPosition: 0.5,
        animated: true,
      });
      setActiveTab(() => {
        return tabs[index];
      });
    },
    [setActiveTab, tabs],
  );
  return (
    <View>
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
              color={currentTab === index ? COLORS.orange : COLORS.gray200}>
              {item}
            </Text>
            {currentTab === index && (
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
    </View>
  );
};

export default Tabs;
