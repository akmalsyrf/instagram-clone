import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

import { users } from "../../fakedata/users";

export default function BottomTabs({ state, descriptors, navigation }) {
	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
				const isFocused = state.index === index;

				const image = [require("../../assets/Home.png"), require("../../assets/Search.png"), require("../../assets/Reel.png"), require("../../assets/Shopping.png"), { uri: users[0].image }];
				const tabStyle = [styles.icon, [styles.icon, { borderRadius: 50, borderColor: "white", borderWidth: label === "ProfileScreen" ? 1 : 0 }]];

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

				return <IconTab key={index} image={image[index]} style={label == "ProfileScreen" ? tabStyle[1] : tabStyle[0]} isFocused={isFocused} options={options} onPress={onPress} onLongPress={onLongPress} />;
			})}
		</View>
	);
}

const IconTab = ({ image, style, onPress, onLongPress, isFocused, options, index }) => (
	<TouchableOpacity
		key={index}
		accessibilityRole="button"
		accessibilityState={isFocused ? { selected: true } : {}}
		accessibilityLabel={options.tabBarAccessibilityLabel}
		testID={options.tabBarTestID}
		onPress={onPress}
		onLongPress={onLongPress}
	>
		<Image source={image} style={style} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		bottom: 0,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingBottom: 10,
		backgroundColor: "black",
	},
	icon: {
		width: 25,
		height: 25,
		marginVertical: 15,
	},
});
