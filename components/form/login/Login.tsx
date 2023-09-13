import React from "react";
import { Formik } from "formik";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Button, Card, HelperText, TextInput } from "react-native-paper";
import { useValidationSchemaLogin } from "./validation/useValidationSchema";
import { useHandleOnLogin } from "./utils/hook/useHandleLogin";
import { container } from "../style";

export const Login = () => {
  const handleOnLogin = useHandleOnLogin();
  const handleValidationLogin = useValidationSchemaLogin();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={container}>
        <Card style={{ width: "80%" }}>
          <Card.Cover
            source={{
              uri: "https://themetrust.com/wp-content/uploads/2018/04/custom_login_cover.jpg",
            }}
          />
          <Card.Content>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={handleValidationLogin}
              initialErrors
              validateOnMount
              onSubmit={handleOnLogin}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                values: { email, password },
                touched,
                isValid,
              }) => (
                <View>
                  <TextInput
                    label="email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={email}
                    keyboardType="email-address"
                    cursorColor="red"
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(touched.email && errors.email)}
                  >
                    <Text>{errors.email}</Text>
                  </HelperText>
                  <TextInput
                    label="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={password}
                    secureTextEntry
                    cursorColor="red"
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(touched.password && errors.password)}
                  >
                    <Text>{errors.password}</Text>
                  </HelperText>
                  <Button
                    icon="send"
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                  >
                    Send
                  </Button>
                </View>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};
