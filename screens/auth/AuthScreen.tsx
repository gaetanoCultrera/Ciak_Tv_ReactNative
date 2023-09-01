import React, { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Login, SignUp } from "../../components";

export const AuthScreen = () => {
  const { username } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );

  return username ? <Login /> : <SignUp />;
};
