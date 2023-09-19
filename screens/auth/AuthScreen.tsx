import React, { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Login, SignUp } from "../../components";

export const AuthScreen = () => {
  const { username } = useSelector(({ userData }: RootState) => userData);

  return username ? <Login /> : <SignUp />;
};
