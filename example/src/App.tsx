import { View, StyleSheet, Text } from 'react-native';
import { TopSheet } from '@yeonhub/react-native-top-sheet';

export default function App() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
