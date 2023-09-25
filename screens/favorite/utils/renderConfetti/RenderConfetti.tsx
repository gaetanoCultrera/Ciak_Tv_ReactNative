import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { RenderPropsConfetti } from "../../../../interfaces/index";
import ConfettiCannon from "react-native-confetti-cannon";
import { containerConfetti } from "../../style";

export const RenderConfetti: FC<RenderPropsConfetti> = ({
  listLength,
  setIsShowConfetti,
}) => {
  const renderConfetti = useMemo(() => {
    if (listLength % 5 === 0 && listLength > 0) {
      return (
        <View style={containerConfetti}>
          <ConfettiCannon
            count={200}
            origin={{ x: -20, y: 0 }}
            explosionSpeed={200}
            onAnimationEnd={() => setIsShowConfetti(false)}
          />
        </View>
      );
    }
  }, [listLength, setIsShowConfetti]);
  return renderConfetti;
};
