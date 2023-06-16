import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import { _FadeIn } from "./fadeIn";
import  AnimatedImage  from "./animate";


console.log(height)
// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={styles.container}>      
      <AnimatedImage durationX={11000} durationY={9500}/>     
      <AnimatedImage durationX={11900} durationY={7400}/>     
      <AnimatedImage durationX={7800} durationY={6500}/>     
      <AnimatedImage durationX={11700} durationY={11200}/>     
      <AnimatedImage durationX={11300} durationY={11900}/>     
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
