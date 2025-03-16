import { View, StyleSheet, Text } from 'react-native';
import { TopSheet } from '@yeonhub/react-native-top-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

/**
 * TopSheet Example
 *
 * This example demonstrates the usage of the TopSheet component.
 * TopSheet is a customizable sheet that slides down from the top of the screen.
 *
 * Key features demonstrated:
 * - Height control with minHeightFactor and maxHeightFactor
 * - Custom styling with topsheetColor and btnColor
 * - Button dimensions with btnHeight and btnWidth
 * - Animation physics using damping and stiffness parameters
 * - Different content for collapsed and expanded states
 *
 * The component supports gestures and can be dragged between states.
 * Wrap the TopSheet in a GestureHandlerRootView to enable gesture functionality.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <TopSheet
          minHeightFactor={6}
          maxHeightFactor={3}
          topsheetColor="#f0f0f0"
          btnColor="#000"
          btnHeight={5}
          btnWidth={50}
          touchableArea={30}
          damping={100}
          stiffness={100}
          onExpand={() => console.log('Expanded')}
          onCollapse={() => console.log('Collapsed')}
          onChange={(isExpanded) =>
            console.log(`TopSheet is ${isExpanded ? 'expanded' : 'collapsed'}`)
          }
          CollapsedContent={
            <View>
              <Text>CollapsedContent</Text>
            </View>
          }
          ExpandedContent={
            <View>
              <Text>ExpandedContent</Text>
            </View>
          }
        />
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
