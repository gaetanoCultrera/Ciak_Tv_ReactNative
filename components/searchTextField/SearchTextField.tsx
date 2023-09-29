import React, { FC, memo } from "react";
import { IPropsTextField } from "../../interfaces/index";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useRenderIcon } from "../../screens/routing/utils/hooks/useRenderIcon";

export const SearchTextField: FC<IPropsTextField> = memo(
  ({ queryString, setQueryString, setIsScrolling, isScrolling }) => {
    const { renderIcon } = useRenderIcon();
    return (
      <View style={{ padding: 40 }}>
        <TextInput
          testID="customTextInput"
          label="Search"
          onChangeText={(text) => {
            if (isScrolling) setIsScrolling(false);
            setQueryString(text);
          }}
          placeholder="term to search"
          value={queryString}
          right={renderIcon("card-search")}
        />
      </View>
    );
  }
);
