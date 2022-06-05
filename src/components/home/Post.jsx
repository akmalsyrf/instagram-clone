import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

export default function Post({ post }) {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <PostFooter post={post} />
      </View>
    </View>
  );
}

const PostHeader = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 5, alignItems: "center" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <View>
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 5 }}>{post.user}</Text>
        </View>
      </View>

      <Text style={{ color: "white", fontWeight: "bold" }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image source={{ uri: post.imageurl }} style={{ height: "100%", resizeMode: "cover" }} />
  </View>
);

const PostFooter = ({ post }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View>
      <IconFooter />
      <Text style={{ color: "white", fontWeight: "bold", marginTop: 10, marginStart: 5 }}>{numberWithCommas(post.likes)} likes</Text>
      <Caption post={post} />
      <CommentSection post={post} />
    </View>
  );
};

const IconFooter = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image source={require("../../assets/Heart-Outline.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/Comment-Outline.png")} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/Direct.png")} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={require("../../assets/Collect.png")} style={styles.footerIcon} />
      </TouchableOpacity>
    </View>
  );
};

const Caption = ({ post }) => (
  <View style={{ marginHorizontal: 5, marginTop: 5, flexDirection: "row" }}>
    <Text style={{ color: "white", fontWeight: "bold" }}>{post.user}</Text>
    <Text style={{ color: "white", marginStart: 5 }}>{post.caption}</Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginHorizontal: 5, marginTop: 5 }}>
    {!!post.comments.length && <Text style={{ color: "gray" }}>View{post.comments.length > 1 ? ` all ${post.comments.length} comments` : " comment"}</Text>}
    {post.comments.map((comment, i) => {
      return (
        <View style={{ marginTop: 5, flexDirection: "row" }} key={i}>
          <Text style={{ color: "white", fontWeight: "bold" }}>{comment.user}</Text>
          <Text style={{ color: "white", marginStart: 5 }}>{comment.comment}</Text>
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
});
