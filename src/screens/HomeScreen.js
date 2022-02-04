import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Stories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
