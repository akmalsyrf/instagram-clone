import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image style={styles.logo} source={require("../../assets/header-logo.png")} />
			</TouchableOpacity>

			<View style={styles.iconsContainer}>
				<TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
					<Image style={styles.icon} source={require("../../assets/add-post.png")} />
				</TouchableOpacity>
				<TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
					<Image style={styles.icon} source={require("../../assets/Heart-Outline.png")} />
					<View style={styles.notificationDot} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.push("DirectMessageScreen")}>
					<View style={styles.unreadBadge}>
						<Text style={styles.unreadBadgeText}>11</Text>
					</View>
					<Image style={styles.icon} source={require("../../assets/messenger.png")} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 20,
	},
	logo: {
		width: 100,
		height: 50,
		resizeMode: "contain",
	},
	iconsContainer: {
		flexDirection: "row",
	},
	icon: {
		width: 25,
		height: 25,
		marginStart: 10,
		resizeMode: "contain",
	},
	notificationDot: {
		position: "absolute",
		backgroundColor: "#ff3250",
		width: 5,
		height: 5,
		borderRadius: 50,
		bottom: -5,
		right: 10,
	},
	unreadBadge: {
		backgroundColor: "#ff3250",
		position: "absolute",
		left: 20,
		bottom: 18,
		width: 25,
		height: 18,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 1,
	},
	unreadBadgeText: {
		color: "white",
		fontWeight: "bold",
	},
});
