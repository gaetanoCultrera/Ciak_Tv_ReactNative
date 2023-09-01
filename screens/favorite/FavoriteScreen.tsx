import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { View } from "react-native";
import { containerSearch } from "../search/style";
import { ListCards } from "../../components";
import { TypeList } from "../../constans/TypeList";
import { RenderConfetti } from "./utils/renderConfetti/RenderConfetti";
import { useIsFocused } from "@react-navigation/native";
export const FavoriteScreen = () => {
  const [currentFavorite, setCurrentFavorite] = useState(1);
  const [isShowConfetti, setIsShowConfetti] = useState(true);
  const isFocused = useIsFocused();

  const dataFavoriteList = useSelector(
    ({ favoriteItems }: RootState) => favoriteItems.favoriteList
  );

  //fatto per settare false alla fine isShowCOnfetti e metterli sopra le card
  useEffect(() => {
    if (isFocused) {
      setIsShowConfetti(true);
    }
  }, [isFocused]);

  return (
    <>
      <View style={containerSearch}>
        {isFocused && isShowConfetti && (
          <RenderConfetti
            listLength={dataFavoriteList.length}
            setIsShowConfetti={setIsShowConfetti}
          />
        )}
        <ListCards
          titleList={""}
          resultData={dataFavoriteList}
          totalPages={dataFavoriteList.length}
          currentPage={currentFavorite}
          setCurrentPage={setCurrentFavorite}
          isLoading={!dataFavoriteList.length}
          isHorizontal={false}
          numColumn={2}
          typeList={TypeList.FAVORITE}
        />
      </View>
    </>
  );
};
