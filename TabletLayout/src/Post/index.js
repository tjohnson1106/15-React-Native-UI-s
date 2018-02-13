import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import PropTypes from "prop-types";

const Post = ({ content, img, title }) => (
  <View style={styles.main}>
    <Image
      source={{
        uri: `https://s3.amazonaws.com/crysfel/public/book/02/01/${img}`
      }}
      style={styles.image}
    />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
    </View>
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>Read More</Text>
    </TouchableOpacity>
  </View>
);

const { string } = PropTypes;
Post.PropTypes = {
  content: string,
  title: string,
  img: string
};

export default Post;
