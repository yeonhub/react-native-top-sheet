# react-native-top-sheet

A top sheet library for React-Native

## Installation

```sh
npm install react-native-top-sheet
```

## Usage

```js
import { TopSheet } from 'react-native-top-sheet';

// Example usage in your component
const MyComponent = () => {
  return (
    <TopSheet
      minHeightFactor={3}
      maxHeightFactor={1.5}
      showBtn={true}
      // Other props
    />
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Default Configuration

The following are the default values for the `TopSheet` component, which you can customize:

| **Property**      | **Default Value** | **Type**  | **Description**                                                                                                                                                                                                                |
| ----------------- | ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `minHeightFactor` | 6                 | `number`  | The height of the top sheet when collapsed. Smaller values result in taller sheets. This value divides the screen height to calculate the minimum height of the top sheet (e.g., `minSheetHeight = height / minHeightFactor`). |
| `maxHeightFactor` | 2                 | `number`  | The height of the top sheet when expanded. Smaller values result in shorter sheets. This value divides the screen height to calculate the maximum height of the top sheet (e.g., `maxSheetHeight = height / maxHeightFactor`). |
| `topsheetColor`   | 'gray'            | `string`  | The background color of the top sheet.                                                                                                                                                                                         |
| `btnColor`        | 'black'           | `string`  | The background color of the toggle button.                                                                                                                                                                                     |
| `btnHeight`       | 5                 | `number`  | The height of the toggle button.                                                                                                                                                                                               |
| `btnWidth`        | 50                | `number`  | The width of the toggle button.                                                                                                                                                                                                |
| `touchableArea`   | 20                | `number`  | The touchable area (padding) of the toggle button.                                                                                                                                                                             |
| `radius`          | 20                | `number`  | The radius (corner rounding) of the top sheet.                                                                                                                                                                                 |
| `showBtn`         | `true`            | `boolean` | Whether or not to show the toggle button.                                                                                                                                                                                      |
| `damping`         | 10                | `number`  | The damping of the spring animation (controls how bouncy it is).                                                                                                                                                               |
| `stiffness`       | 400               | `number`  | The stiffness of the spring animation (controls how fast it moves).                                                                                                                                                            |

You can customize these values by passing them as props to the `TopSheet` component.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
