import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

import { users } from "../../fakedata/users";

export default function Stories() {
  return (
    <View style={{ paddingTop: 5, paddingBottom: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((story, index) => {
          return (
            <View key={index} style={{ alignItems: "center" }}>
              <Image source={{ uri: story.image }} style={styles.story} />
              <Text style={{ color: "white" }}>{story.user.length > 11 ? story.user.substring(0, 10) + "..." : story.user}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
});
