import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import * as yup from "yup";

export const useValidationProfileSchema = () => {
  const { password } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const validationProfileSchema = yup.object({
    oldPassword: yup
      .string()
      .oneOf([password], "old Passwords must match, it's not the same")
      .required("old password is required"),
    newPassword: yup
      .string()
      .min(8, "Must Contain 8 Characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
        "One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .notOneOf(
        [password],
        "The new password cannot be the same as the old password"
      )
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("confirm Password is required")
      .oneOf([yup.ref("newPassword")], "Passwords must match"),
  });
  return validationProfileSchema;
};
