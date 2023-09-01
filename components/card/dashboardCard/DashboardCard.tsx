import React, { memo, FC } from "react";
import { CustomDataCard } from "../../../interfaces/IResponseMovie";
import { Card } from "react-native-paper";
import { View } from "react-native";
import { containerCardTitle, cardTitle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TRootStackParamList } from "../../../interfaces/TRootStackParamList";
import { TextContent } from "../../text/TextContent";
import { Variant } from "../../../constans/Variant";

export const DashboardCard: FC<CustomDataCard> = memo(
  ({ id, title, poster_path }) => {
    const navigation =
      useNavigation<StackNavigationProp<TRootStackParamList>>();
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
