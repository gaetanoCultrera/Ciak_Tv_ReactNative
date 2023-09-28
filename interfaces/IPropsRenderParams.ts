import { TypeList } from "../constans/TypeList";

export interface IPropsRenderParams {
  typeList?: TypeList;
  resultDataLength?: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isFetching: boolean;
  totalPages?: number;
  setIsScrolling?: React.Dispatch<React.SetStateAction<boolean>>;
}
