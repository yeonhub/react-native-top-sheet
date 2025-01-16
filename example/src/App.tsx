import React from 'react';
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
        TopSheetShortContent={<Text>여기에는 짧은 내용</Text>}
        TopSheetLongContent={<Text>여기에는 긴 내용이 들어갑니다.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'tan'
  },
});
