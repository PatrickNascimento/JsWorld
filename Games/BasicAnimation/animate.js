import React, { Component } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class _animate extends Component {
  constructor(props) {
    super(props);
    
    this.animationValue = new Animated.Value(0);

    this.ballPosition = {
      x: width / 2,
      y: height / 2,
    };
    
    this.ballRadius = 20;
    this.paddleWidth = 0;
    this.paddleHeight = 80;
    this.tableWidth = 300;
    this.tableHeight = 300;
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animationValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.animationValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  render() {
    const paddleTranslateY = this.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.tableHeight - this.paddleHeight],
    });

    const ballTranslateX = this.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.paddleWidth + this.ballRadius, this.tableWidth - this.ballRadius],
    });

    return (
      <View style={styles.container}>
        <View style={styles.pongTable}>
          <Animated.View style={[styles.paddle, { transform: [{ translateY: paddleTranslateY }] }]} />
          <Animated.View
            style={[
              styles.ball,
              { transform: [{ translateX: ballTranslateX }, { translateY: this.ballPosition.y - this.ballRadius }] },
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pongTable: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
  },
  paddle: {
    position: 'absolute',
    width: 10,
    height: 80,
    backgroundColor: 'blue',
  },
  ball: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
