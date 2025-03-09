import React, {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Text from '../Text';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import Button from '../Button';
import {useAppTheme} from '../../theme';

const ChangePicture = () => {
  const {theme} = useAppTheme();
  return (
    <ActionSheet
      keyboardHandlerEnabled={true}
      gestureEnabled={true}
      containerStyle={{
        paddingVertical: 8,
        gap: 16,
        paddingHorizontal: 24,
        paddingBottom: 16,
        backgroundColor: theme.backgroundColor,
      }}
      indicatorStyle={{backgroundColor:appColors.gray100}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24,
          flexDirection: 'row',
        }}>
        <Button
          variant="transparent"
          icon={<Icon name="location" color={theme.primaryText} />}
        />
        <Text>Profile Picture</Text>

        <Button icon={<Icon name="bell" color={appColors.white} />} />
      </View>
      <View style={{flexDirection: 'row', gap: 24}}>
        <View style={{gap: 8, alignItems: 'center', justifyContent: 'center'}}>
          <Icon
            name="bell"
            color={appColors.white}
            style={{
              padding: 10,
              backgroundColor: appColors.orange,
              borderRadius: 100,
            }}
            size={18}
          />
          <Text fontSize={14} color={theme.primaryText}>
            Camera
          </Text>
        </View>
        <View style={{gap: 8, alignItems: 'center', justifyContent: 'center'}}>
          <Icon
            name="location"
            color={appColors.white}
            style={{
              padding: 10,
              backgroundColor: appColors.orange,
              borderRadius: 100,
            }}
            size={18}
          />
          <Text fontSize={14} color={theme.primaryText}>
            Gallery
          </Text>
        </View>
      </View>
    </ActionSheet>
  );
};

export default ChangePicture;
