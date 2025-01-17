import { useAnimatedStyle } from 'react-native-reanimated';

export const useAnimatedSheetStyles = (
  sheetHeight: any,
  minSheetHeight: number,
  maxSheetHeight: number
) => {
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

  return { animatedStyles, animatedOpacityShort, animatedOpacityLong };
};
