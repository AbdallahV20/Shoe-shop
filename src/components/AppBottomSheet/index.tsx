import React, {View} from 'react-native';
import ActionSheet, {SheetManager, Sheets} from 'react-native-actions-sheet';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import {useAppTheme} from '../../theme';
import IconButton from '../IconButton';
import {ReactNode} from 'react';
import {styles} from './styles';

interface AppBottomSheetProps {
  leftComponent?: ReactNode;
  sheetName: keyof Sheets;
  sheetContent: ReactNode;
}

const AppBottomSheet = ({
  leftComponent,
  sheetName,
  sheetContent,
}: AppBottomSheetProps) => {
  const {theme} = useAppTheme();
  return (
    <ActionSheet
      keyboardHandlerEnabled={true}
      gestureEnabled={true}
      containerStyle={styles(theme).container}
      indicatorStyle={{backgroundColor: appColors.gray100}}>
      <View style={styles(theme).header}>
        {leftComponent ? leftComponent : <View style={styles().placeholder} />}
        <Text>Profile Picture</Text>
        <IconButton iconName="x" onPress={() => SheetManager.hide(sheetName)} />
      </View>
      <View>{sheetContent && sheetContent}</View>
    </ActionSheet>
  );
};

export default AppBottomSheet;
