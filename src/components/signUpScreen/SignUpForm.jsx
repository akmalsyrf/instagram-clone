import { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Validator from "email-validator";

import { API } from "../../config/api";
import { UserContext } from "../../context/UserContext";

export default function SignUpForm({ navigation }) {
	const [state, dispatch] = useContext(UserContext);

	const signUpFormSchema = yup.object().shape({
		email: yup.string().required("An email is required").email(),
		username: yup.string().required(2, "A username is required"),
		password: yup.string().required("A password is required").min(6, "Password must be at least 6 characters long"),
	});
	const handleSubmit = async (values) => {
		console.log(values);
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			const body = JSON.stringify(values);
			const response = await API.post("/register", body, config);
			console.log(response.data);

			if (response.data.status === "success") {
				dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });
				navigation.navigate("HomeTabs");
			} else if (response.data.status === "error") {
				alert("Register Error");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<>
			<Formik initialValues={{ email: "", password: "", username: "" }} onSubmit={handleSubmit} validationSchema={signUpFormSchema} validateOnMount={true}>
				{({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
					<>
						<View style={styles.wrapper}>
							<View>
								<View style={[styles.inputField, { borderColor: values.username.length > 1 ? "gray" : "red" }]}>
									<TextInput
										onChangeText={handleChange("username")}
										onBlur={handleBlur("username")}
										value={values.username}
										placeholderTextColor="#444"
										placeholder="Username"
										autoCapitalize="none"
										textContentType="username"
										autoFocus={true}
									/>
								</View>
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
							</View>
							<Button disabled={!isValid} title="Sign Up" onPress={() => (isValid ? handleSubmit() : alert("Please check your input again"))} />
						</View>
						<View style={styles.signUpContainer}>
							<Text>Already have an account? </Text>
							<TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
								<Text style={{ color: "#6bb0f5" }}>Log In</Text>
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
