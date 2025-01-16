import React from 'react';
import { Dimensions, StyleSheet, type ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import TopSheetShort from './TopSheetShort';
import TopSheetLong from './TopSheetLong';
import TopSheetBtn from './TopSheetBtn';

const { height } = Dimensions.get('window');

interface TopSheetProps {
  minHeightFactor?: number;
  maxHeightFactor?: number;
  topsheetColor?: string;
  btnColor?: string;
  btnHeight?: number;
  btnWidth?: number;
  touchableArea?: number;
  TopSheetShortContent?: React.ReactNode;
  TopSheetLongContent?: React.ReactNode;
}

const TopSheet = ({
  minHeightFactor = 6,
  maxHeightFactor = 2,
  topsheetColor = 'gray',
  btnColor = 'black',
  btnHeight = 5,
  btnWidth = 50,
  touchableArea = 20,
  TopSheetShortContent,
  TopSheetLongContent,
}: TopSheetProps): JSX.Element => {
  const minSheetHeight = height / minHeightFactor;
  const maxSheetHeight = height / maxHeightFactor;

  const sheetHeight = useSharedValue<number>(minSheetHeight);
  const context = useSharedValue<{ y: number }>({ y: 0 });

  const animatedStyles = useAnimatedStyle(() => ({
    height: sheetHeight.value,
  }));

  const animatedOpacityShort = useAnimatedStyle(() => {
    const opacityRange = maxSheetHeight - minSheetHeight;
    let opacity = (maxSheetHeight - sheetHeight.value) / opacityRange;
    opacity = Math.max(0, Math.min(opacity, 1));
    const zIndex = opacity === 1 ? 10 : -10;
    return { opacity, zIndex };
  });

  const animatedOpacityLong = useAnimatedStyle(() => {
    const opacityRange = maxSheetHeight - minSheetHeight;
    let opacity = (maxSheetHeight - sheetHeight.value) / opacityRange;
    opacity = 1 - Math.max(0, Math.min(opacity, 1));
    return { opacity };
  });

  const toggleHeight = () => {
    sheetHeight.value = withSpring(
      sheetHeight.value === minSheetHeight ? maxSheetHeight : minSheetHeight,
      {
        damping: 10,
        stiffness: 400,
        overshootClamping: true,
      }
    );
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: sheetHeight.value };
    })
    .onUpdate((e) => {
      const newValue = e.translationY + context.value.y;
      sheetHeight.value = Math.min(
        Math.max(newValue, minSheetHeight),
        maxSheetHeight
      );
    })
    .onEnd((e) => {
      if (e.velocityY > 0) {
        sheetHeight.value = withSpring(maxSheetHeight, {
          damping: 10,
          stiffness: 400,
          overshootClamping: true,
        });
      } else {
        sheetHeight.value = withSpring(minSheetHeight, {
          damping: 10,
          stiffness: 400,
          overshootClamping: true,
        });
      }
    });

  return (
    <Animated.View style={[styles.containerOut, animatedStyles]}>
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              styles.container,
              { backgroundColor: topsheetColor },
              animatedStyles,
            ]}
          >
            <TopSheetShort animatedOpacityShort={animatedOpacityShort}>
              {TopSheetShortContent}
            </TopSheetShort>
            <TopSheetLong animatedOpacityLong={animatedOpacityLong}>
              {TopSheetLongContent}
            </TopSheetLong>
            <TopSheetBtn
              toggleHeight={toggleHeight}
              btnColor={btnColor}
              btnHeight={btnHeight}
              btnWidth={btnWidth}
              touchableArea={touchableArea}
            />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  } as ViewStyle,
  containerOut: {
    backgroundColor: 'transparent',
  } as ViewStyle,
});

export default TopSheet;
