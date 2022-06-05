import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import LoginForm from "../components/loginScreen/LoginForm";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/instagram-logo.png")} style={{ width: 100, height: 100 }} />
        <LoginForm />
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
