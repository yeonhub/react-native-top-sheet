import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import type { TopSheetBtnIconProps } from './types';

const TopSheetBtnIcon: React.FC<TopSheetBtnIconProps> = ({
  btnColor,
  btnHeight,
  btnWidth,
}) => {
  return (
    <View
      style={[
        styles.btnIcon,
        {
          backgroundColor: btnColor,
          height: btnHeight,
          width: btnWidth,
        },
      ]}
    ></View>
  );
};

export default TopSheetBtnIcon;
