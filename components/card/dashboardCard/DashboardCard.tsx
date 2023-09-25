import React, { memo, FC } from "react";
import {
  CustomDataCard,
  RootStackParamListType,
} from "../../../interfaces/index";
import { Card } from "react-native-paper";
import { View } from "react-native";
import { containerCardTitle, cardTitle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextContent } from "../../text/TextContent";
import { Variant } from "../../../constans/Variant";

//non è possibile utilizzare require in un file typescript perchè deve essere rinosciuto al momemnto della compilazione, quindi solo immagini statiche

// require(poster_path
//    ? `http://image.tmdb.org/t/p/original/${poster_path}`
//    : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png") as string,

export const DashboardCard: FC<CustomDataCard> = memo(
  ({ id, title, poster_path }) => {
    const navigation =
      useNavigation<StackNavigationProp<RootStackParamListType>>();
    return (
      <View style={{ padding: 10 }}>
        <Card
          style={{ width: 150 }}
          onPress={() => navigation.navigate("Details", { movieId: id })}
        >
          <Card.Cover
            testID="cardImage"
            alt="default image"
            source={{
              uri: poster_path
                ? `http://image.tmdb.org/t/p/original/${poster_path}`
                : "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png",
            }}
          />
          <Card.Content style={containerCardTitle}>
            <TextContent
              style={cardTitle}
              variant={Variant.TITLE_MEDIUM}
              title={title}
            />
          </Card.Content>
        </Card>
      </View>
    );
  }
);
