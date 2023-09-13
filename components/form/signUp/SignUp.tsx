import React, { useState } from "react";
import { Formik } from "formik";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Button, Card, HelperText, TextInput } from "react-native-paper";
import { useHandleSignUp } from "./utils/hook/useHandleSignUp";
import { validationSchemaSignUp } from "./validation/ValidationSchema";
import { container } from "../style";

export const SignUp = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const handleSignUp = useHandleSignUp();

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
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchemaSignUp}
              validateOnMount
              initialErrors
              onSubmit={handleSignUp}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                values: { username, email, password, confirmPassword },
                touched,
                isValid,
              }) => (
                <View>
                  <TextInput
                    label="username"
                    onChangeText={handleChange("username")}
                    value={username}
                    onBlur={handleBlur("username")}
                    error={touched.username && Boolean(errors.username)}
                    cursorColor="red"
                  />

                  <HelperText
                    type="error"
                    visible={Boolean(touched.username && errors.username)}
                  >
                    <Text>{errors.username}</Text>
                  </HelperText>

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
                    secureTextEntry={secureTextEntry}
                    cursorColor="red"
                    right={
                      <TextInput.Icon
                        icon={secureTextEntry ? "eye-off" : "eye"}
                        onPress={() => {
                          setSecureTextEntry(!secureTextEntry);
                        }}
                      />
                    }
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(touched.password && errors.password)}
                  >
                    <Text>{errors.password}</Text>
                  </HelperText>
                  <TextInput
                    label="Confirm Password"
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={confirmPassword}
                    secureTextEntry={secureTextEntry}
                    cursorColor="red"
                    right={
                      <TextInput.Icon
                        icon={secureTextEntry ? "eye-off" : "eye"}
                        onPress={() => {
                          setSecureTextEntry(!secureTextEntry);
                        }}
                      />
                    }
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                  >
                    <Text>{errors.confirmPassword}</Text>
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
