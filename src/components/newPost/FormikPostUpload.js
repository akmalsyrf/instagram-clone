import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import * as Yup from "yup";
import { Formik } from "formik";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";

const uploadSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2000, "Caption has a max of 2000 characters"),
});

export default function FormikPostUpload({ navigation }) {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(value) => {
        console.log(value);
        console.log("Your form was successfully submitted");
        navigation.goBack();
      }}
      validationSchema={uploadSchema}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={{ margin: 20, justifyContent: "space-between", flexDirection: "row" }}>
            <Image source={validUrl.isUri(thumbnailUrl) ? { uri: thumbnailUrl } : require("../../assets/placeholderUpload.png")} style={{ width: 100, height: 100 }} />
            <View style={{ flex: 1, marginStart: 12 }}>
              <TextInput placeholder="Write a caption ..." placeholderTextColor="gray" multiline={true} style={{ color: "white" }} onChangeText={handleChange("caption")} onBlur={handleBlur("caption")} value={values.caption} />
            </View>
          </View>
          <Divider orientation="vertical" width={0.2} />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            placeholder="Enter image url"
            placeholderTextColor="gray"
            style={{ color: "white" }}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && <Text style={{ fontSize: 10, color: "red" }}>{errors.imageUrl}</Text>}

          <Button title="Share" onPress={handleSubmit} disabled={!isValid} />
        </>
      )}
    </Formik>
  );
}
