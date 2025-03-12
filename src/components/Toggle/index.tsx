import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {appColors} from '../../theme/colors';

interface ToggleProps {
  isOn: boolean;
  onToggle: ((isOn: boolean) => any) | undefined;
}
const Toggle = ({isOn, onToggle}: ToggleProps) => {
  return (
    <ToggleSwitch
      isOn={isOn}
      onColor={appColors.primary}
      offColor={appColors.gray500}
      size="medium"
      onToggle={onToggle}
      animationSpeed={200}
    />
  );
};

export default Toggle;
