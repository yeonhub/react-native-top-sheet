import { View, StyleSheet, Text } from 'react-native';
import { TopSheet } from '@yeonhub/react-native-top-sheet';

export default function App() {
  return (
    <View style={styles.container}>
      <TopSheet
        minHeightFactor={6}
        maxHeightFactor={1.1}
        topsheetColor="#f0f0f0"
        borderBackgroundColor="#000"
        btnColor="#000"
        btnHeight={5}
        btnWidth={50}
        touchableArea={30}
        CollapsedTopSheetContent={
          <View>
            <Text>CollapsedTopSheetContent</Text>
          </View>
        }
        ExpandedTopSheetContent={
          <View>
            <Text>ExpandedTopSheetContent</Text>
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
