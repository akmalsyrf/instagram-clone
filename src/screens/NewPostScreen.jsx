import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import {} from "react-native";
import AddNewPost from "../components/newPost/AddNewPost";

export default function NewPostScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar />
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}
