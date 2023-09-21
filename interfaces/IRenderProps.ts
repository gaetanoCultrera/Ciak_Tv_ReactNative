import { TypeList } from "../constans/TypeList";
export interface RenderPropsEmptyList {
  isLoading?: boolean;
  error: unknown;
  typedList?: TypeList;
}

export interface RenderPropsTitle {
  title: string;
  dataLength?: number;
}

export interface RenderPropsConfetti {
  setIsShowConfetti: React.Dispatch<React.SetStateAction<boolean>>;
  listLength: number;
}
