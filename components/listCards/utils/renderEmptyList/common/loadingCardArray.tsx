import React from "react";
import { LoadingCard } from "../../../../card/loadingCard/LoadingCard";

export const loadingCardsArray = (length: number) =>
  Array.from({ length: length }, (_, index) => <LoadingCard key={index} />);
