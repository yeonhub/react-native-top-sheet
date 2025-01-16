import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

interface TopSheetBtnProps {
  toggleHeight: () => void;
  btnColor?: string;
  btnHeight?: number;
  btnWidth?: number;
  touchableArea?: number;
}

const TopSheetBtn: React.FC<TopSheetBtnProps> = ({
  toggleHeight,
  btnColor,
  btnHeight,
  btnWidth,
  touchableArea,
}) => {
  return (
    <Pressable
      style={[styles.topSheetBtn, { height: touchableArea }]}
      onPress={toggleHeight}
    >
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  topSheetBtn: {
    zIndex: 100,
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
  },
  btnIcon: {
    borderRadius: 10,
    alignSelf: 'center',
  },
});
export default TopSheetBtn;
