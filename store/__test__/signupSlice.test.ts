import signupSlice, { resetState, updateObjectAuth } from "../signupSlice";

const initialState = {
  dataSignup: {
    email: "",
    username: "",
    password: "",
    isLogged: false,
  },
};

describe("signupSlice", () => {
  test("should handle updateObjectAuth action", () => {
    const payload = {
      email: "john@example.com",
      username: "user",
      password: "Aaaaaaaa8!",
      isLogged: true,
    };
    //importo il reducer di signupSlice
    expect(signupSlice(initialState, updateObjectAuth(payload))).toEqual({
      dataSignup: {
        email: "john@example.com",
        username: "user",
        password: "Aaaaaaaa8!",
        isLogged: true,
      },
    });
  });

  test("should handle resetState action", () => {
    const prevState = {
      dataSignup: {
        email: "john@example.com",
        username: "user",
        password: "Aaaaaaaa8!",
        isLogged: true,
      },
    };

    expect(signupSlice(prevState, resetState())).toEqual(initialState);
  });
});
