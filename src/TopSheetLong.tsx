import React, { type ReactNode } from 'react';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';

interface TopSheetLongProps {
  children?: ReactNode;
  animatedOpacityLong: AnimatedStyleProp<{ opacity: number }>;
}

const TopSheetLong: React.FC<TopSheetLongProps> = ({
  children,
  animatedOpacityLong,
}) => {
  return <Animated.View style={animatedOpacityLong}>{children}</Animated.View>;
};

export default TopSheetLong;
