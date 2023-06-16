import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';

const IMAGE_WIDTH = 30; // Largura da imagem
const IMAGE_HEIGHT = 30; // Altura da imagem

const AnimatedImage = ({ durationX, durationY }) => {
  const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width);
  const [deviceHeight, setDeviceHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(Dimensions.get('window').width);
      setDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', handleResize);

    return () => {
      Dimensions.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    const animationX = Animated.sequence([
      Animated.timing(position.x, {
        toValue: deviceWidth - IMAGE_WIDTH,
        duration: durationX,
        useNativeDriver: true,
      }),
      Animated.timing(position.x, {
        toValue: 0,
        duration: durationX,
        useNativeDriver: true,
      }),
    ]);

    const animationY = Animated.sequence([
      Animated.timing(position.y, {
        toValue: deviceHeight - IMAGE_HEIGHT,
        duration: durationY,
        useNativeDriver: true,
      }),
      Animated.timing(position.y, {
        toValue: 0,
        duration: durationY,
        useNativeDriver: true,
      }),
    ]);

    const loopX = Animated.loop(animationX);
    const loopY = Animated.loop(animationY);

    loopX.start();
    loopY.start();

    return () => {
      loopX.stop();
      loopY.stop();
    };
  }, [deviceWidth, deviceHeight, position, durationX, durationY]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/ball.png')}
        style={[
          styles.image,
          {
            transform: [
              { translateX: position.x },
              { translateY: position.y },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
});

export default AnimatedImage;
