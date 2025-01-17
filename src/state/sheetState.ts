import { useSharedValue } from 'react-native-reanimated';

export const useSheetState = (minSheetHeight: number) => {
  const sheetHeight = useSharedValue<number>(minSheetHeight);
  const context = useSharedValue<{ y: number }>({ y: 0 });

  return { sheetHeight, context };
};
