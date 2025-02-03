import { Dimensions } from 'react-native';
import Animated, { withSpring } from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler';
import type { TopSheetProps } from './types';
import { TopSheetDefaults } from './TopSheetDefaults';
import CollapsedTopSheet from '../collapsedtopsheet/CollapsedTopSheet';
import ExpandedTopSheet from '../expandedtopsheet/ExpandedTopSheet';
import TopSheetBtn from '../topsheetbtn/TopSheetBtn';
import { useSheetState } from '../../state/sheetState';
import { useAnimatedSheetStyles } from '../../animations/animatedStyles';
import { useSheetGestures } from '../../gestures/sheetGestures';
import { clampValue, validateHeightFactors } from '../../utils/validation';
import styles from './styles';

const { height } = Dimensions.get('window');

const TopSheet = ({
  minHeightFactor = TopSheetDefaults.minHeightFactor,
  maxHeightFactor = TopSheetDefaults.maxHeightFactor,
  topsheetColor = TopSheetDefaults.topsheetColor,
  borderBackgroundColor = TopSheetDefaults.borderBackgroundColor,
  btnColor = TopSheetDefaults.btnColor,
  btnHeight = TopSheetDefaults.btnHeight,
  btnWidth = TopSheetDefaults.btnWidth,
  touchableArea = TopSheetDefaults.touchableArea,
  radius = TopSheetDefaults.radius,
  showBtn = TopSheetDefaults.showBtn,
  damping = TopSheetDefaults.damping,
  stiffness = TopSheetDefaults.stiffness,
  CollapsedContent,
  ExpandedContent,
}: TopSheetProps): JSX.Element => {
  const { minFactor, maxFactor } = validateHeightFactors(
    minHeightFactor,
    maxHeightFactor
  );
  const clampedDamping = clampValue(damping, 'damping');
  const clampedStiffness = clampValue(stiffness, 'stiffness');

  const minSheetHeight = height / minFactor;
  const maxSheetHeight = height / maxFactor;

  const { sheetHeight, context } = useSheetState(minSheetHeight);

  const { animatedStyles, animatedOpacityShort, animatedOpacityLong } =
    useAnimatedSheetStyles(sheetHeight, minSheetHeight, maxSheetHeight);

  const gesture = useSheetGestures(
    sheetHeight,
    context,
    minSheetHeight,
    maxSheetHeight,
    clampedDamping,
    clampedStiffness
  );

  const toggleHeight = () => {
    sheetHeight.value = withSpring(
      sheetHeight.value === minSheetHeight ? maxSheetHeight : minSheetHeight,
      {
        damping: clampedDamping,
        stiffness: clampedStiffness,
        overshootClamping: true,
      }
    );
  };

  return (
    <Animated.View
      style={[animatedStyles, { backgroundColor: borderBackgroundColor }]}
    >
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              styles.container,
              {
                backgroundColor: topsheetColor,
                borderBottomLeftRadius: radius,
                borderBottomRightRadius: radius,
              },
              animatedStyles,
            ]}
          >
            <CollapsedTopSheet animatedOpacityShort={animatedOpacityShort}>
              {CollapsedContent}
            </CollapsedTopSheet>
            <ExpandedTopSheet animatedOpacityLong={animatedOpacityLong}>
              {ExpandedContent}
            </ExpandedTopSheet>
            <TopSheetBtn
              toggleHeight={toggleHeight}
              btnColor={btnColor}
              btnHeight={btnHeight}
              btnWidth={btnWidth}
              touchableArea={touchableArea}
              showBtn={showBtn}
            />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Animated.View>
  );
};

export default TopSheet;
