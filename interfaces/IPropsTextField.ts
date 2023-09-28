import { Dispatch, SetStateAction } from "react";

export interface IPropsTextField {
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}
