import React, { FC, memo, useEffect } from "react";
import { IPropsDetailsBanner } from "../../../interfaces/index";
import { View } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { cardTitle, containerCardTitle } from "../dashboardCard/style";
import { useHandleFavorite } from "./utils/hooks/useHandleFavorite";
import {
  borderContent,
  containerDetailsCard,
  otherItemStyle,
  imageCard,
} from "./style";
import { useRenderGenres } from "./utils/hooks/useRenderGenres";
import { TextContent } from "../../text/TextContent";
import { Variant } from "../../../constans/Variant";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { YoutubeButton } from "../../button/youtubeButton/YoutubeButton";
import { useRenderVideo } from "./utils/hooks/useRenderVideo";

export const DetailsBanner: FC<IPropsDetailsBanner> = memo((props) => {
  const {
    backdrop_path,
    title,
    isFavorite,
    overview,
    vote_average,
    genres,
    videos: {
      results: [{ key }],
    },
  } = props;

  const navigation = useNavigation();
  const handleFavorite = useHandleFavorite(props);
  const renderGenres = useRenderGenres({ genres, otherItemStyle });
  const { renderApp, renderVideo } = useRenderVideo({ key });

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <View style={containerDetailsCard}>
      <Card.Cover
        style={imageCard}
        source={{
          uri: backdrop_path
            ? `http://image.tmdb.org/t/p/original/${backdrop_path}`
            : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png",
        }}
      />
      <View style={containerCardTitle}>
        <Card.Content style={borderContent}>
          <TextContent
            title={overview}
            variant={Variant.TITLE_LARGE}
            style={cardTitle}
          />
          {renderGenres}
          <TextContent
            title={String(Math.round(vote_average))}
            variant={Variant.TITLE_LARGE}
            style={otherItemStyle}
          />

          <Card.Actions>
            <Animatable.View
              animation={isFavorite ? "shake" : "flash"}
              duration={2000}
            >
              <IconButton
                icon="heart"
                iconColor={isFavorite ? "red" : "white"}
                size={50}
                onPress={() => handleFavorite()}
              />
              {/* gestione di una promise da un custom hook */}
            </Animatable.View>
            <YoutubeButton handleApp={() => void renderApp()} />
          </Card.Actions>
          {renderVideo}
        </Card.Content>
      </View>
    </View>
  );
});
