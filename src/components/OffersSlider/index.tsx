import {View, FlatList, ViewToken} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Image} from 'react-native';
import {AppImages} from '../../assets/app_images';
import SliderDots from '../SliderDots';
import styles from './styles';
import {px} from '../../utils';
const OffersSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const promoImages = [
    {id: 1, image: AppImages.promo1},
    {id: 2, image: AppImages.promo2},
  ];
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    const currentIndex = viewableItems[0]?.index as number;
    setActiveIndex(() => currentIndex);
  };
  useEffect(() => {
    const promotionInterval = setInterval(() => {
      flatListRef?.current?.scrollToIndex({
        index: (activeIndex + 1) % promoImages.length,
        viewPosition: 0.5,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(promotionInterval);
  }, [activeIndex, promoImages.length]);
  return (
    <View style={styles().container}>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={promoImages}
        onViewableItemsChanged={onViewableItemsChanged}
        horizontal
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View
            style={{
              marginStart: index === 0 ? 0 : px(10),
            }}>
            <Image
              style={styles(index, promoImages.length - 1).image}
              source={item.image}
            />
          </View>
        )}
        pagingEnabled
      />
      <View style={styles().slider}>
        <SliderDots dotsNumber={promoImages.length} activeIndex={activeIndex} />
      </View>
    </View>
  );
};

export default OffersSlider;
