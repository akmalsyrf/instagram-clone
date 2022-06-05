import { View, StyleSheet, Image, StatusBar } from "react-native";
import SignUpForm from "../components/signUpScreen/SignUpForm";

export default function SignUpScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar />
			<View style={styles.logoContainer}>
				<Image source={require("../assets/instagram-logo.png")} style={{ width: 100, height: 100 }} />
				<SignUpForm navigation={navigation} />
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
