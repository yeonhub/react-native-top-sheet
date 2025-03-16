export interface TopSheetProps {
  minHeightFactor?: number;
  maxHeightFactor?: number;
  topsheetColor?: string;
  borderBackgroundColor?: string;
  btnColor?: string;
  btnHeight?: number;
  btnWidth?: number;
  touchableArea?: number;
  radius?: number;
  showBtn?: boolean;
  damping?: number;
  stiffness?: number;
  CollapsedContent?: React.ReactNode;
  ExpandedContent?: React.ReactNode;
  onExpand?: () => void;
  onCollapse?: () => void;
  onChange?: (isExpanded: boolean) => void;
}
