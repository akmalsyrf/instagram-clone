import { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Validator from "email-validator";

import { WebView } from "react-native-webview";

import { API } from "../../config/api";
import { UserContext } from "../../context/UserContext";

export default function LoginForm({ navigation }) {
	const [state, dispatch] = useContext(UserContext);

	const loginFormSchema = yup.object().shape({
		email: yup.string().required("An email is required").email(),
		password: yup.string().required("A password is required").min(6, "Password must be at least 6 characters long"),
	});
	const handleSubmit = async (values) => {
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			const body = JSON.stringify(values);
			const response = await API.post("/login", body, config);
			console.log(response.data);

			if (response.data.status === "success") {
				dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });
				navigation.navigate("HomeTabs");
			} else if (response.data.status === "error") {
				alert("Login Error");
			}
		} catch (error) {
			alert("Login Error");
			console.log(error);
		}
	};

	const loginWithFacebook = async () => {
		try {
			const response = await API.get("/auth/facebook");
			console.log("LOGIN WITH FB", response.data.data);
			if (response.status == 200) {
				return <WebView originWhitelist={["*"]} source={{ html: response.data.data }} />;
			} else {
				alert("Login with facebook failed");
			}
		} catch (error) {
			alert("Login with facebook failed");
			console.log(error.message);
		}
	};
	return (
		<>
			<Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit} validationSchema={loginFormSchema} validateOnMount={true}>
				{({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
					<>
						<View style={styles.wrapper}>
							<Button title="Continue with Facebook" onPress={loginWithFacebook} />
							<Text style={{ alignSelf: "center", marginVertical: 15 }}>or</Text>
							<View>
								<View style={[styles.inputField, { borderColor: values.email.length > 1 || Validator.validate(values.email) ? "gray" : "red" }]}>
									<TextInput
										onChangeText={handleChange("email")}
										onBlur={handleBlur("email")}
										value={values.email}
										placeholderTextColor="#444"
										placeholder="Phone number, username, or email"
										autoCapitalize="none"
										keyboardType="email-address"
										textContentType="emailAddress"
										autoFocus={true}
									/>
								</View>
								<View style={[styles.inputField, , { borderColor: values.password.length >= 6 ? "gray" : "red" }]}>
									<TextInput
										onChangeText={handleChange("password")}
										onBlur={handleBlur("password")}
										value={values.password}
										placeholderTextColor="#444"
										placeholder="Password"
										autoCapitalize="none"
										autoCorrect={false}
										secureTextEntry={true}
										textContentType="password"
									/>
								</View>
								<View style={{ alignItems: "flex-end", marginBottom: 10 }}>
									<Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
								</View>
							</View>
							<Button disabled={!isValid} title="Log in" onPress={() => (isValid ? handleSubmit() : alert("Please check your input again"))} />
						</View>
						<View style={styles.signUpContainer}>
							<Text>Don't have an account? </Text>
							<TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
								<Text style={{ color: "#6bb0f5" }}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</Formik>
		</>
	);
}

const styles = StyleSheet.create({
	wrapper: { marginTop: 50 },
	inputField: {
		borderRadius: 4,
		paddingVertical: 6,
		paddingHorizontal: 15,
		backgroundColor: "#fafafa",
		marginBottom: 10,
		borderWidth: 1,
		justifyContent: "center",
	},
	signUpContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		marginTop: 30,
	},
});
