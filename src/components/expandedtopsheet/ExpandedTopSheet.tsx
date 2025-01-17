import React, { type ReactNode } from 'react';
import Animated from 'react-native-reanimated';

interface ExpandedTopSheetProps {
  children?: ReactNode;
  animatedOpacityLong: { opacity: number };
}

const ExpandedTopSheet: React.FC<ExpandedTopSheetProps> = ({
  children,
  animatedOpacityLong,
}) => {
  return <Animated.View style={animatedOpacityLong}>{children}</Animated.View>;
};

export default ExpandedTopSheet;
