import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { container } from "../style";
import { Card, HelperText, TextInput, Text, Button } from "react-native-paper";
import { Formik } from "formik";
import { useValidationProfileSchema } from "./validation/useValidationSchema";
import { useHandleProfile } from "./utils/hooks/useHandleProfile";

export const ChangePassword = () => {
  const handleSetProfile = useHandleProfile();
  const handleValidationProfile = useValidationProfileSchema();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

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
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              }}
              validationSchema={handleValidationProfile}
              validateOnMount
              onSubmit={handleSetProfile}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                values: { oldPassword, newPassword, confirmPassword },
                touched,
                isValid,
              }) => (
                <View>
                  <TextInput
                    label="Old Password"
                    onChangeText={handleChange("oldPassword")}
                    onBlur={handleBlur("oldPassword")}
                    value={oldPassword}
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
                    visible={Boolean(touched.oldPassword && errors.oldPassword)}
                  >
                    <Text>{errors.oldPassword}</Text>
                  </HelperText>
                  <TextInput
                    label="New Password"
                    onChangeText={handleChange("newPassword")}
                    onBlur={handleBlur("newPassword")}
                    value={newPassword}
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
                    visible={Boolean(touched.newPassword && errors.newPassword)}
                  >
                    <Text>{errors.newPassword}</Text>
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
                    onPress={() => void handleSubmit()}
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
