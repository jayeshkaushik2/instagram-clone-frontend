import { View, Text, TextInput, Image, Button } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";

const PLACEHOLDER_IMAGE =
  "https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png";

const uploadPostSchemes = Yup.object().shape({
  imageurl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the characters"),
});

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = React.useState(PLACEHOLDER_IMAGE);

  return (
    <Formik
      initialValues={{ caption: "", imageurl: "" }}
      onSubmit={(values) => {
        console.log("post submitted", values);
        navigation.goBack();
      }}
      validationSchema={uploadPostSchemes}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_IMAGE,
              }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 18 }}
                placeholder="Write a caption"
                placeholderTextColor={"gray"}
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            style={{ color: "white", fontSize: 15 }}
            placeholder="Enter image url"
            placeholderTextColor={"gray"}
            onChangeText={handleChange("imageurl")}
            onBlur={handleBlur("imageurl")}
            value={values.imageurl}
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
          />
          {errors.imageurl && (
            <Text style={{ fontSize: 12, color: "red", margin: 5 }}>
              {errors.imageurl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
