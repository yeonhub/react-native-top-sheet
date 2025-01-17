import { Gesture } from 'react-native-gesture-handler';
import { withSpring } from 'react-native-reanimated';

export const useSheetGestures = (
  sheetHeight: any,
  context: any,
  minSheetHeight: number,
  maxSheetHeight: number,
  damping: number,
  stiffness: number
) => {
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
          damping,
          stiffness,
          overshootClamping: true,
        });
      } else {
        sheetHeight.value = withSpring(minSheetHeight, {
          damping,
          stiffness,
          overshootClamping: true,
        });
      }
    });

  return gesture;
};
