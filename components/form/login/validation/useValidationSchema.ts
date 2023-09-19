import * as yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export const useValidationSchemaLogin = () => {
  const { email, password } = useSelector(
    ({ userData }: RootState) => userData
  );
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .oneOf([email], "email must be the same")
      .required("Email is required"),
    password: yup
      .string()
      .oneOf([password], "password must be the same")
      .required("Password is required"),
  });
  return validationSchema;
};
