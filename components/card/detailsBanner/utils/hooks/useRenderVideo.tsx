import React, { useCallback, useMemo } from "react";
import WebView from "react-native-webview";
import { IPropsRenderVideo } from "../../../../../interfaces/index";
import { Linking } from "react-native";
export const useRenderVideo = ({ key }: IPropsRenderVideo) => {
  const renderApp = useCallback(async () => {
    try {
      await Linking.openURL(`vnd.youtube://${key}`);
    } catch (e) {
      await Linking.openURL(
        "https://play.google.com/store/apps/details?id=com.google.android.youtube"
      );
    }
  }, [key]);
  const renderVideo = useMemo(() => {
    return <WebView source={{ uri: `https://www.youtube.com/embed/${key}` }} />;
  }, [key]);
  return { renderVideo, renderApp };
};
