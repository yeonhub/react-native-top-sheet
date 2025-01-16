import React, { type ReactNode } from 'react';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';

interface TopSheetShortProps {
  children?: ReactNode;
  animatedOpacityShort: AnimatedStyleProp<{ opacity: number; zIndex: number }>;
}

const TopSheetShort: React.FC<TopSheetShortProps> = ({
  children,
  animatedOpacityShort,
}) => {
  return (
    <Animated.View style={animatedOpacityShort}>{children}</Animated.View>
  );
};

export default TopSheetShort;
