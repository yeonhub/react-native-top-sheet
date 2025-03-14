import {
  useAnimatedStyle,
  useDerivedValue,
  runOnJS,
  type SharedValue,
  useSharedValue,
} from 'react-native-reanimated';

export const useAnimatedSheetStyles = (
  sheetHeight: SharedValue<number>,
  minSheetHeight: number,
  maxSheetHeight: number,
  onChange?: (isExpanded: boolean) => void,
  onExpand?: () => void,
  onCollapse?: () => void
) => {
  const lastCallbackState = useSharedValue({
    wasExpanded: false,
    wasCollapsed: true,
    lastOnChangeValue: false,
  });

  const fullyExpandedThreshold = minSheetHeight + 2;
  const fullyCollapsedThreshold = maxSheetHeight - 2;

  const midPoint = (minSheetHeight + maxSheetHeight) / 2;

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

  const isExpanded = useDerivedValue(() => {
    const isNearTop = sheetHeight.value <= fullyExpandedThreshold;
    const isNearBottom = sheetHeight.value >= fullyCollapsedThreshold;

    const currentlyExpanded = sheetHeight.value >= midPoint;

    if (isNearTop && !lastCallbackState.value.wasCollapsed) {
      lastCallbackState.value.wasCollapsed = true;
      if (onCollapse) {
        runOnJS(onCollapse)();
      }
    } else if (!isNearTop && lastCallbackState.value.wasCollapsed) {
      lastCallbackState.value.wasCollapsed = false;
    }

    if (isNearBottom && !lastCallbackState.value.wasExpanded) {
      lastCallbackState.value.wasExpanded = true;
      if (onExpand) {
        runOnJS(onExpand)();
      }
    } else if (!isNearBottom && lastCallbackState.value.wasExpanded) {
      lastCallbackState.value.wasExpanded = false;
    }

    if (
      onChange &&
      currentlyExpanded !== lastCallbackState.value.lastOnChangeValue
    ) {
      lastCallbackState.value.lastOnChangeValue = currentlyExpanded;
      runOnJS(onChange)(currentlyExpanded);
    }

    return currentlyExpanded;
  });

  return {
    animatedStyles,
    animatedOpacityShort,
    animatedOpacityLong,
    isExpanded,
  };
};
