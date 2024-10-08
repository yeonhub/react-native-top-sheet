import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

// window height 가져오기
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const topSheet = () => {
  const translateY = useSharedValue(0);

  const context = useSharedValue({y: 0});

  const gesture = Gesture.Pan()
    // Pan gesture 시작 시 context에 현재 translateY 저장
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    // Pan gesture update 시 context에 저장된 translateY와 현재 translateY를 더해서 translateY에 저장
    .onUpdate(e => {
      const newValue = e.translationY + context.value.y;
      translateY.value = Math.min(Math.max(newValue, 0), SCREEN_HEIGHT / 2.5);
    })
    // Pan gesture 끝날 시 velocityY에 따라 translateY에 spring 적용
    .onEnd(e => {
      // velocityY가 0보다 크면 아래로 스크롤
      if (e.velocityY >= 0) {
        translateY.value = withSpring(SCREEN_HEIGHT / 2.5, {
          // damping: 스프링의 진동을 결정하는 값, stiffness: 스프링의 강도를 결정하는 값, overshootClamping: true로 설정하면 스프링이 overshoot되지 않음
          damping: 10,
          stiffness: 400,
          overshootClamping: true,
        });
      } else {
        translateY.value = withSpring(0, {
          damping: 10,
          stiffness: 400,
          overshootClamping: true,
        });
      }
    });

  const onPress = () => {
    translateY.value =
      translateY.value === 0
        ? withSpring(SCREEN_HEIGHT / 2.5, {
            damping: 10,
            stiffness: 400,
            overshootClamping: true,
          })
        : withSpring(0, {damping: 10, stiffness: 400, overshootClamping: true});
  };

  // Animated Style을 사용하여 translateY에 따라 View의 위치 변경
  const rTopSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  // Animated Style을 사용하여 translateY에 따라 Line의 색 변경
  const rLineStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: translateY.value === 0 ? 'blue' : 'red',
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.topSheetContainer, rTopSheetStyle]}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Animated.View style={[styles.line, rLineStyle]} />
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  );
};
const styles = StyleSheet.create({
  topSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
  button: {
    width: 150,
    height: 18,
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    borderRadius: 2,
  },
  line: {
    width: 75,
    height: 4,
    alignSelf: 'center',
    top: '50%',
    position: 'absolute',
    borderRadius: 2,
  },
});

export default topSheet;
