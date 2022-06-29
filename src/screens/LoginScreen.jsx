import React from "react";
import { View, StyleSheet, Image, StatusBar, Text, Button } from "react-native";
import LoginForm from "../components/loginScreen/LoginForm";

export default function LoginScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar />
			<View style={styles.logoContainer}>
				<Image source={require("../assets/instagram-logo.png")} style={{ width: 100, height: 100 }} />
				<LoginForm navigation={navigation} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: 50,
		paddingHorizontal: 12,
	},
	logoContainer: {
		alignItems: "center",
		marginTop: 60,
	},
});
