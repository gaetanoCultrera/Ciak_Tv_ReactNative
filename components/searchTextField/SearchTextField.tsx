import React, { FC, memo } from "react";
import { IPropsTextField } from "../../interfaces/IPropsTextField";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useRenderIcon } from "../../screens/routing/utils/hooks/useRenderIcon";

export const SearchTextField: FC<IPropsTextField> = memo(
  ({ queryString, setQueryString }) => {
    const renderIcon = useRenderIcon();
    return (
      <View style={{ padding: 40 }}>
        <TextInput
          testID="customTextInput"
          label="Search"
          onChangeText={(text) => setQueryString(text)}
          placeholder="term to search"
          value={queryString}
          right={renderIcon("card-search")}
        />
      </View>
    );
  }
);
