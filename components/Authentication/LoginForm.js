import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import * as Validator from "email-validator";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 8 characters"),
  });
  //   const [email, setEmail] = React.useState(null);
  //   const [password, setPassword] = React.useState(null);

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log("post submitted", values);
          //   navigation.goBack();
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={[
                styles.inputField(isValid),
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            {/* {errors.email && (
              <Text style={{ fontSize: 12, color: "red", marginBottom: 10 }}>
                {errors.email} {values.email}
              </Text>
            )} */}
            <View
              style={[
                styles.inputField(isValid),
                {
                  borderColor:
                    values.password.length > 1 && values.password.length < 6
                      ? "red"
                      : "#ccc",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            {/* {errors.password && (
              <Text style={{ fontSize: 12, color: "red", marginBottom: 10 }}>
                {errors.password} {values.password}
              </Text>
            )} */}
            <View style={{ alignItems: "flex-end", marginBottom: 28 }}>
              <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
            </View>

            <Pressable
              style={styles.loginButton(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.loginButtonText}>Log in</Text>
            </Pressable>

            <View style={styles.SigupContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={{ color: "#6BB0F5" }}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginTop: 80 },
  inputField: (isValid) => ({
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
  }),
  loginButton: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  loginButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },
  SigupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 45,
  },
});

export default LoginForm;
