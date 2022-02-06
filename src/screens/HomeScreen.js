import React from "react";
import { ScrollView } from "react-native";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";

import { post } from "../fakedata/posts";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Stories />
      <ScrollView>
        {post.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
