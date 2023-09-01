import React, { useMemo } from "react";
import { TextContent } from "../../../../text/TextContent";
import { Variant } from "../../../../../constans/Variant";
import { IPropsRenderGenres } from "../../../../../interfaces/IPropsRenderGenres";

export const useRenderGenres = ({
  genres,
  otherItemStyle,
}: IPropsRenderGenres) => {
  const renderGenres = useMemo(
    () =>
      genres.map(({ id, name }) => (
        <TextContent
          key={id}
          title={name}
          variant={Variant.TITLE_MEDIUM}
          style={otherItemStyle}
        />
      )),
    [genres, otherItemStyle]
  );
  return renderGenres;
};
