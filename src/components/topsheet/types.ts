export interface TopSheetProps {
  minHeightFactor?: number;
  maxHeightFactor?: number;
  topsheetColor?: string;
  btnColor?: string;
  btnHeight?: number;
  btnWidth?: number;
  touchableArea?: number;
  radius?: number;
  showBtn?: boolean;
  damping?: number;
  stiffness?: number;
  CollapsedTopSheetContent?: React.ReactNode;
  ExpandedTopSheetContent?: React.ReactNode;
}
