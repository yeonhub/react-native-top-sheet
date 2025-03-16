import { useSharedValue } from 'react-native-reanimated';

/**
 * Creates and manages the shared values for the sheet component
 * @param minSheetHeight - The initial height of the sheet
 * @return An object containing sheetHeight and context shared values
 */
export const useSheetState = (minSheetHeight: number) => {
  const sheetHeight = useSharedValue<number>(minSheetHeight);
  const context = useSharedValue<{ y: number }>({ y: 0 });

  return { sheetHeight, context };
};
