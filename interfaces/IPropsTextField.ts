import { Dispatch, SetStateAction } from "react";

export interface IPropsTextField {
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
  isScrolling: boolean;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}
