import * as React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import AppImages from '../../assets/app_images';
import styles from './styles';
import {px} from '../../utils';

const promoBackgorunds = [
  AppImages.promo_background_1,
  AppImages.promo_background_2,
];

const width = Dimensions.get('window').width - px(48);

function OffersSlider() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <>
      <Carousel
        ref={ref}
        autoPlay
        autoPlayInterval={2000}
        scrollAnimationDuration={1000}
        width={width}
        height={width / 2}
        data={promoBackgorunds}
        onProgressChange={progress}
        renderItem={({index}) => (
          <View style={styles.imageWrapper}>
            <Image source={promoBackgorunds[index]} style={styles.image} />
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        activeDotStyle={styles.activeDot}
        data={promoBackgorunds}
        dotStyle={styles.dotStyle}
        containerStyle={styles.dotContainer}
        onPress={onPressPagination}
      />
    </>
  );
}

export default OffersSlider;
