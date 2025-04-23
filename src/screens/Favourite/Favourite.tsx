import {FlatList, View} from 'react-native';
import React from 'react';
import {
  Button,
  FavouriteCard,
  MainLayout,
  NavigationAction,
  NavigationHeader,
  Text,
} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import styles from './styles';
import AppImages from '../../assets/app_images';
import {appColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const Favourite = () => {
  const favouriteProducts = useSelector((state: RootState) => state.favourite);
  const navigation = useNavigation();
  const EmptyCartComponent = () => (
    <View style={styles().emptyListContainer}>
      <LottieView
        source={AppImages.empry_fav_animation}
        loop
        autoPlay
        style={styles().emptyListImage}
      />
      <View style={styles().emptyTextContainer}>
        <Text fontSize={21} fontWeight="semiBold" textAlign="center">
          No Favourites Yet!
        </Text>
        <Text
          fontSize={14}
          fontWeight="medium"
          textAlign="center"
          color={appColors.gray100}>
          You can add an item to your favourites by clicking "love icon"
        </Text>
        <Button
          size="large"
          title="Go Back"
          alignSelf="center"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
  return (
    <MainLayout
      isHeaderFixed
      isScrollable
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title="Favourite"
          endAction={<NavigationAction.NofificationsButton />}
        />
      }>
      <FlatList
        data={favouriteProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FavouriteCard product={item} />}
        contentContainerStyle={styles().contentContainer}
        ListEmptyComponent={<EmptyCartComponent />}
      />
    </MainLayout>
  );
};

export default Favourite;
