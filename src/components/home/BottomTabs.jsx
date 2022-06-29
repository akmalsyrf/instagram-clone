import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { users } from "../../fakedata/users";

export default function BottomTabs({ state, descriptors, navigation }) {
	return (
		<View style={{ flexDirection: "row" }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1 }}
					>
						<Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label}</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}
// export default function BottomTabs({ state, descriptors, navigation }) {
// 	const [activeTab, setActiveTab] = React.useState("Home");

// 	const image = [require("../../assets/Home.png"), require("../../assets/Search.png"), require("../../assets/Reel.png"), require("../../assets/Shopping.png"), { uri: users[0].image }];
// 	const activeImage = [require("../../assets/Home-Fill.png"), require("../../assets/Search-fill.png")];

// 	const tabStyle = [styles.icon, [styles.icon, { borderRadius: 50, borderColor: "white", borderWidth: activeTab === "Profile" ? 2 : 0 }]];
// 	return (
// 		<>
// 			<View style={styles.container}>
// 				<IconTab image={activeTab === "Home" ? activeImage[0] : image[0]} style={tabStyle[0]} tabName="Home" setActiveTab={setActiveTab} />
// 				<IconTab image={activeTab === "Search" ? activeImage[1] : image[1]} style={tabStyle[0]} tabName="Search" setActiveTab={setActiveTab} />
// 				<IconTab image={image[2]} style={tabStyle[0]} tabName="Reels" setActiveTab={setActiveTab} />
// 				<IconTab image={image[3]} style={tabStyle[0]} tabName="Shop" setActiveTab={setActiveTab} />
// 				<IconTab image={image[4]} style={tabStyle[1]} tabName="Profile" setActiveTab={setActiveTab} />
// 			</View>
// 		</>
// 	);
// }

const IconTab = ({ image, style, tabName, setActiveTab }) => (
	<TouchableOpacity onPress={() => setActiveTab(tabName)}>
		<Image source={image} style={style} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		bottom: 0,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: 10,
	},
	icon: {
		width: 25,
		height: 25,
		marginVertical: 15,
	},
});
