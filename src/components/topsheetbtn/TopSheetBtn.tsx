import React from 'react';
import { Pressable } from 'react-native';
import TopSheetBtnIcon from './TopSheetBtnIcon';
import styles from './styles';
import type { TopSheetBtnProps } from './types';

const TopSheetBtn: React.FC<TopSheetBtnProps> = ({
  toggleHeight,
  btnColor,
  btnHeight,
  btnWidth,
  touchableArea,
  showBtn,
}) => {
  return (
    <Pressable
      style={[styles.topSheetBtn, { height: touchableArea }]}
      onPress={toggleHeight}
    >
      {showBtn && (
        <TopSheetBtnIcon
          btnColor={btnColor}
          btnHeight={btnHeight}
          btnWidth={btnWidth}
        />
      )}
    </Pressable>
  );
};

export default TopSheetBtn;
