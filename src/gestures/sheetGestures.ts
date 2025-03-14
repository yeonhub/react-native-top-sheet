import { Gesture } from 'react-native-gesture-handler';
import { withSpring, type SharedValue } from 'react-native-reanimated';

/**
 * Creates a pan gesture handler for controlling the sheet
 * @param sheetHeight - Shared value for the sheet height
 * @param context - Shared value for gesture context
 * @param minSheetHeight - Minimum allowed height for the sheet
 * @param maxSheetHeight - Maximum allowed height for the sheet
 * @param damping - Spring animation damping value
 * @param stiffness - Spring animation stiffness value
 * @return A configured pan gesture handler for the sheet
 */
export const useSheetGestures = (
  sheetHeight: SharedValue<number>,
  context: SharedValue<{ y: number }>,
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
      const targetHeight = e.velocityY > 0 ? maxSheetHeight : minSheetHeight;

      sheetHeight.value = withSpring(targetHeight, {
        damping,
        stiffness,
        overshootClamping: true,
      });
    });

  return gesture;
};
