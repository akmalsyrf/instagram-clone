import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import FormikPostUpload from "./FormikPostUpload";

export default function AddNewPost({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUpload navigation={navigation} />
    </View>
  );
}

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require("../../assets/Back.png")} style={{ width: 20, height: 20 }} />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
