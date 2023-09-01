import { FormikState } from "formik";

export interface IOnSubmitProp {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: (
    nextState?:
      | Partial<
          FormikState<{
            oldPassword: string;
            newPassword: string;
            confirmPassword: string;
          }>
        >
      | undefined
  ) => void;
}
