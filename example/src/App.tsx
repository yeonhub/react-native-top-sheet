import { View, StyleSheet, Text } from 'react-native';
import { TopSheet } from 'react-native-top-sheet';

export default function App() {
  return (
    <View style={styles.container}>
      <TopSheet
        minHeightFactor={6}
        maxHeightFactor={1.2}
        topsheetColor="#f0f0f0"
        btnColor="#000"
        btnHeight={5}
        btnWidth={50}
        touchableArea={30}
        CollapsedTopSheetContent={
          <View style={styles.sheetContainer}>
            <Text style={styles.text}>React Native Top Sheet</Text>
            <Text style={styles.text}>React Native Top Sheet</Text>
          </View>
        }
        ExpandedTopSheetContent={
          <View style={styles.sheetContainer}>
            <View style={styles.sheetItem}>
              <View style={styles.imgBox} />
              <Text style={styles.text}>React Native Top Sheet</Text>
            </View>
            <View style={styles.sheetItem}>
              <View style={styles.imgBox} />
              <Text style={styles.text}>React Native Top Sheet</Text>
            </View>
            <View style={styles.sheetItem}>
              <View style={styles.imgBox} />
              <Text style={styles.text}>React Native Top Sheet</Text>
            </View>
            <View style={styles.sheetItem}>
              <View style={styles.imgBox} />
              <Text style={styles.text}>React Native Top Sheet</Text>
            </View>
            <View style={styles.sheetItem}>
              <View style={styles.imgBox} />
              <Text style={styles.text}>React Native Top Sheet</Text>
            </View>
            <View style={styles.sheetItem}>
              <View style={styles.imgBox} />
              <Text style={styles.text}>React Native Top Sheet</Text>
            </View>
            <View style={styles.sheetItem}>
              <View style={styles.imgBox} />
              <Text style={styles.text}>React Native Top Sheet</Text>
            </View>
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
  sheetContainer: {
    padding: 20,
    flexDirection: 'column',
  },
  sheetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imgBox: {
    width: 60,
    height: 60,
    backgroundColor: '#727272',
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
