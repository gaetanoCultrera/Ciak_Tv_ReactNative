import { Icon } from "../constans/Icon";

export interface IPropsButton {
  title: string;
  icon: Icon;
  handleAction: () => Promise<void>;
}
