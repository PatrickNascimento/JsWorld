import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import { _FadeIn } from "./fadeIn";
import  _animate  from "./animate";

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={styles.container}>
      <_animate/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006699",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
  },
});
