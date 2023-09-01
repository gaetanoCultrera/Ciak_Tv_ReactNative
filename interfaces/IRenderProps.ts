export interface RenderPropsEmptyList {
  isLoading?: boolean;
  error: unknown;
}

export interface RenderPropsTitle {
  title: string;
  dataLength?: number;
}

export interface RenderPropsConfetti {
  setIsShowConfetti: React.Dispatch<React.SetStateAction<boolean>>;
  listLength: number;
}
