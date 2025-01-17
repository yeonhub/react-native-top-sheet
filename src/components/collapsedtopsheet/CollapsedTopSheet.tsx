import React, { type ReactNode } from 'react';
import Animated from 'react-native-reanimated';
import styles from './styles';

interface CollapsedTopSheetProps {
  children?: ReactNode;
  animatedOpacityShort: { opacity: number; zIndex: number };
}

const CollapsedTopSheet: React.FC<CollapsedTopSheetProps> = ({
  children,
  animatedOpacityShort,
}) => {
  return (
    <Animated.View style={[styles.shortContainer, animatedOpacityShort]}>
      {children}
    </Animated.View>
  );
};

export default CollapsedTopSheet;
