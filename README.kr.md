# @yeonhub/react-native-top-sheet

React-Native용 topsheet 라이브러리 🎯

<div style="display: flex; gap: 10px;">
  <img src="./README.assets/preview1.gif" alt="Preview 1" width="200">
  <img src="./README.assets/preview2.gif" alt="Preview 2" width="200">
</div>

### 의존성

📢 이 라이브러리는 다음 두 라이브러리에 의존합니다:

![react-native-gesture-handler](https://img.shields.io/npm/v/react-native-gesture-handler/latest?label=react-native-gesture-handler&logo=npm&color=green&style=flat-square)  
![react-native-reanimated](https://img.shields.io/npm/v/react-native-reanimated/latest?label=react-native-reanimated&logo=npm&color=blue&style=flat-square)

## 지원

<div style="display: flex; justify-content: space-between; width :350px; height : 100px">
  <img src="./README.assets/android.png" width="100px" height = "100px">
  <img src="./README.assets/iOS.png" width="100px" height = "100px">
  <img src="./README.assets/expo.png" width="100px" height = "100px">
</div>

---

# 설치 가이드

## React Native CLI 사용자

### 1. 라이브러리 설치

npm 또는 yarn을 사용하여 `@yeonhub/react-native-top-sheet` 패키지를 설치할 수 있습니다.

#### npm 사용:

```sh
npm install @yeonhub/react-native-top-sheet
```

#### yarn 사용:

```sh
yarn add @yeonhub/react-native-top-sheet
```

### 2. 필수 의존성 설치

이 라이브러리는 다음과 같은 추가 패키지를 필요로 합니다. 수동으로 설치해야 합니다.

#### npm 사용:

```sh
npm install react-native-gesture-handler react-native-reanimated
```

#### yarn 사용:

```sh
yarn add react-native-gesture-handler react-native-reanimated
```

### 3. `babel.config.js` 업데이트

`react-native-reanimated`를 사용하려면 `babel.config.js` 파일에 플러그인을 추가해야 합니다.  
다음 코드를 `plugins` 배열에 추가하세요.

```js
module.exports = {
  ...
  plugins: ['react-native-reanimated/plugin'],
};
```

### 4. 루트 컴포넌트를 `GestureHandlerRootView`로 감싸기

제스처 핸들러가 정상적으로 동작하려면 `GestureHandlerRootView`로 최상위 컴포넌트를 감싸야 합니다.

```js
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App'; // 메인 컴포넌트

export default function Main() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
}
```

---

## Expo 사용자

### 1. 라이브러리 설치

Expo 프로젝트에서 다음 명령어를 실행하여 라이브러리를 설치할 수 있습니다.

```sh
npx expo install @yeonhub/react-native-top-sheet
```

### 2. Root 컴포넌트를 `GestureHandlerRootView`로 감싸기

React Native CLI와 마찬가지로, `GestureHandlerRootView`를 사용하여 제스처 처리를 올바르게 설정해야 합니다.

```js
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App'; // 메인 컴포넌트

export default function Main() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
}
```

### 3. 선택 사항: `TopSheet`의 `CollapsedContent` 또는 `ExpandedContent`에서 `ScrollView` 사용하기

`react-native-gesture-handler`의 `ScrollView`를 사용하려면 버전을 확인하세요.

#### **`react-native-gesture-handler` 버전이 2.22.0 이상인 경우:**

```js
import { ScrollView } from 'react-native-gesture-handler';
```

#### **`react-native-gesture-handler` 버전이 2.22.0 미만인 경우:**
이전 버전에서는 `GestureHandlerRootView`와의 호환성 문제가 발생할 수 있습니다. 최신 버전으로 업데이트하세요.

```sh
npm uninstall react-native-gesture-handler
npm install react-native-gesture-handler
```

그 후, `ScrollView`를 정상적으로 사용할 수 있습니다.

```js
import { ScrollView } from 'react-native-gesture-handler';
```

---

## 문제 해결 (Troubleshooting)

### 1. **"Invariant Violation: Tried to register two views with the same name RNGestureHandlerRootView" 오류 발생**

이 오류는 `GestureHandlerRootView`가 앱에서 중복으로 사용될 때 발생합니다.

#### 해결 방법:

- **React Native CLI 사용자:**  
  앱이 이미 `GestureHandlerRootView`로 감싸져 있는지 확인하세요.  
  중복 감싸기가 있을 경우 불필요한 부분을 제거하세요.

- **Expo 사용자:**  
  Expo SDK와 `react-native-gesture-handler`의 일부 버전에서는 `GestureHandlerRootView`가 자동으로 적용됩니다.  
  수동으로 감싸지 않고 기본 설정을 유지하세요.

이 문제를 해결하면 `GestureHandlerRootView`가 한 번만 적용되어 정상적으로 동작합니다.

## 기능

1. **커스터마이징 가능한 topsheet 높이**: topsheet가 축소 및 확장 상태일 때 높이를 조정할 수 있어 디자인에 유연성을 제공합니다.

2. **커스터마이징 가능한 topsheet 콘텐츠**: 축소 및 확장 상태에서 topsheet 안에 본인만의 콘텐츠를 추가할 수 있어 완전하게 사용자 정의가 가능합니다.

3. **커스터마이징 가능한 topsheet 배경 색상**: topsheet의 배경 색상을 앱 디자인에 맞게 쉽게 커스터마이징할 수 있습니다.

4. **확장/축소 버튼 표시 여부**: 확장/축소 버튼을 표시할지 여부를 선택할 수 있어 필요에 따라 더 깔끔한 UI를 만들 수 있습니다.

5. **조정 가능한 터치 영역**: 버튼 주위의 터치 가능한 영역을 조정할 수 있어 사용자 상호작용을 개선합니다.

6. **커스터마이징 가능한 테두리 반경**: topsheet의 모서리 반경(테두리 반경)을 디자인에 맞게 커스터마이징할 수 있습니다.

7. **커스터마이징 가능한 애니메이션 속도**: topsheet 열기/닫기 애니메이션의 속도를 조정하여 더 부드럽거나 빠른 경험을 제공할 수 있습니다.

## 사용법

```js
import { TopSheet } from '@yeonhub/react-native-top-sheet';

// 컴포넌트 내에서 사용 예시
const MyComponent = () => {
  return (
    <TopSheet
      minHeightFactor={3}
      maxHeightFactor={1.5}
      showBtn={true}
      // 기타 props
      CollapsedContent={
        <View>
          <Text>React Native Top Sheet</Text>
        </View>
      }
      ExpandedContent={
        <View>
          <Text>React Native Top Sheet</Text>
          {/* 필요시 항목 추가 */}
        </View>
      }
    />
  );
};
```

## ⚠️ 중요 사항

- **ScrollView 사용법**: topsheet 안에 `ScrollView`를 추가할 때, React Native의 `ScrollView`를 사용하지 마세요. `react-native-gesture-handler`의 `ScrollView`를 사용해야 스크롤 기능이 정상적으로 동작합니다.

  ```js
  import { ScrollView } from 'react-native-gesture-handler';
  ```

## 기여 방법

[기여 가이드](CONTRIBUTING.md)를 참고하여 리포지토리에 기여하는 방법과 개발 워크플로우를 확인하세요.

## 기본 설정

다음은 `TopSheet` 컴포넌트의 기본값입니다. 이 값들은 `props`로 변경하여 커스터마이징할 수 있습니다.

| **속성**                | **기본값**    | **타입**  | **설명**                                                                                                                                                                                     |
| ----------------------- | ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `minHeightFactor`       | 6             | `number`  | 축소된 상태의 topsheet 높이입니다. 값이 작을수록 더 높은 topsheet가 됩니다. 이 값은 화면 높이를 나누어 최소 높이를 계산하는 데 사용됩니다 (예: `minSheetHeight = height / minHeightFactor`). |
| `maxHeightFactor`       | 2             | `number`  | 확장된 상태의 topsheet 높이입니다. 값이 작을수록 더 낮은 topsheet가 됩니다. 이 값은 화면 높이를 나누어 최대 높이를 계산하는 데 사용됩니다 (예: `maxSheetHeight = height / maxHeightFactor`). |
| `borderBackgroundColor` | 'transparent' | `string`  | 테두리 반경으로 인해 생성된 공백을 채울 배경 색상입니다. topsheet 아래의 콘텐츠에 배경 색상이 있다면, 그 배경 색상과 일치하도록 설정하면 공백을 가릴 수 있습니다.                            |
| `topsheetColor`         | 'gray'        | `string`  | topsheet의 배경 색상입니다.                                                                                                                                                                  |
| `btnColor`              | 'black'       | `string`  | 확장/축소 버튼의 배경 색상입니다.                                                                                                                                                            |
| `btnHeight`             | 5             | `number`  | 확장/축소 버튼의 높이입니다.                                                                                                                                                                 |
| `btnWidth`              | 50            | `number`  | 확장/축소 버튼의 너비입니다.                                                                                                                                                                 |
| `touchableArea`         | 20            | `number`  | 확장/축소 버튼의 터치 가능한 영역의 높이입니다.                                                                                                                                              |
| `radius`                | 20            | `number`  | topsheet의 모서리 반경(테두리 반경)입니다.                                                                                                                                                   |
| `showBtn`               | `true`        | `boolean` | 확장/축소 버튼을 표시할지 여부입니다.                                                                                                                                                        |
| `damping`               | 10            | `number`  | 스프링 애니메이션의 감쇠 값(얼마나 뚝 떨어지는지)을 설정합니다. **1과 100 사이의 값**이어야 하며, 기본값은 10입니다.                                                                         |
| `stiffness`             | 400           | `number`  | 스프링 애니메이션의 강성 값(얼마나 빠르게 움직이는지)을 설정합니다. **1과 500 사이의 값**이어야 하며, 기본값은 400입니다.                                                                    |

이 값들은 `TopSheet` 컴포넌트에 props로 전달하여 커스터마이징할 수 있습니다.

## License

MIT

---
