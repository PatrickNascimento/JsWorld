import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const IMAGE_WIDTH = 30; // Largura da imagem
const IMAGE_HEIGHT = 30; // Altura da imagem

class _animate extends Component {
  constructor(props) {
    super(props);
    
    const { width, height } = Dimensions.get('window');
    
    this.state = {
      position: new Animated.ValueXY({ x: 0, y: 0 }),
      deviceWidth: width,
      deviceHeight: height,
    };
  }
  
  componentDidMount() {
    const { position, deviceWidth, deviceHeight } = this.state;
    
    const animatedStyle = {
      transform: [
        { translateX: position.x },
        { translateY: position.y },
      ],
    };
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(position.x, {
          toValue: deviceWidth - IMAGE_WIDTH,
          duration: 2000,
        }),
        Animated.timing(position.x, {
          toValue: 0,
          duration: 2000,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(position.y, {
          toValue: deviceHeight - IMAGE_HEIGHT,
          duration: 1500,
        }),
        Animated.timing(position.y, {
          toValue: 0,
          duration: 1500,
        }),
      ]),
    ).start();
  }
  
  render() {
    const { position } = this.state;
    
    const animatedStyle = {
      transform: [
        { translateX: position.x },
        { translateY: position.y },
      ],
    };
    
    return (
      <View style={styles.container}>
        <Animated.Image
            source={require('./assets/ball.png')}
          style={[styles.image, animatedStyle]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
});

export default _animate;

 
