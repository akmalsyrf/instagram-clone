import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Validator from "email-validator";

export default function LoginForm({ navigation }) {
	const loginFormSchema = yup.object().shape({
		email: yup.string().required("An email is required").email(),
		password: yup.string().required("A password is required").min(6, "Password must be at least 6 characters long"),
	});
	const handleSubmit = (values) => {};
	return (
		<>
			<Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit} validationSchema={loginFormSchema} validateOnMount={true}>
				{({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
					<>
						<View style={styles.wrapper}>
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
							<Button
								disabled={!isValid}
								title="Log in"
								onPress={() => {
									handleSubmit();
									isValid ? navigation.push("HomeScreen") : null;
								}}
							/>
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
