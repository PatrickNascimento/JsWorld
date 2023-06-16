import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const speed = useRef(5).current;

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height - Constants.statusBarHeight;
    const ballSize = 30;

    const moveBall = () => {
      const moveX = Animated.timing(position, {
        toValue: { x: screenWidth - ballSize, y: screenHeight - ballSize },
        duration: (screenWidth - ballSize) / speed,
        useNativeDriver: false,
      });

      const moveY = Animated.timing(position, {
        toValue: { x: 0, y: 0 },
        duration: (screenHeight - ballSize) / speed,
        useNativeDriver: false,
      });

      Animated.sequence([moveX, moveY, moveBall()]).start();
    };

    moveBall();

    return () => {
      position.stopAnimation();
      position.setValue({ x: 0, y: 0 });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, position.getLayout()]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006998',
  },
  ball: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
