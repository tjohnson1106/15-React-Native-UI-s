import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Button from "./Button/index";

function onPressBtn() {
  Alert.alert("Alert", "Button clicked!");
}

const MainApp = () => (
  <View style={styles.container}>
    <Button style={styles.btn}>Primary Button</Button>
    <Button success style={styles.btn}>
      Success Button
    </Button>
    <Button info style={styles.btn}>
      Info Button
    </Button>
    <Button danger rounded style={styles.btn}>
      Rounded Button
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    margin: 10
  }
});

export default MainApp;
