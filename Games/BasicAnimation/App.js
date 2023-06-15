import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import { _FadeIn } from "./fadeIn";
import  _animate  from "./animate";


console.log(height)
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
    
    backgroundColor: "#006699",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "grey",
  },
});
