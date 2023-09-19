import React, { FC } from "react";
import { ICustomPropsMaps } from "../../interfaces/ICustomPropsMaps";
import { RenderMaps } from "./utils/renderMaps/RenderMaps";

export const TheaterMaps: FC<ICustomPropsMaps> = ({ coords }) => (
  <RenderMaps coords={coords} />
);
