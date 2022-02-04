import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
