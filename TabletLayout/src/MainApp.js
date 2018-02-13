import React, { Component } from "react";
import { ListView, StyleSheet, View, Text } from "react-native";

import Post from "./Post";
import data from "./data";

const ds = new ListView.dataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class MainApp extends Component {
  state = {
    dataSource: ds.cloneWithRows(data.posts)
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Latest Posts</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={post => <Post {...post} />}
          style={styles.list}
          contentContainerStyle={styles.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    backgroundColor: "#f0f3f4",
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  toolbar: {
    backgroundColor: "#34495e",
    padding: 10,
    paddingTop: 20
  },
  title: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  }
});

export default MainApp;
