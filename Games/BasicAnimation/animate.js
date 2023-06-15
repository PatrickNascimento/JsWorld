import React, { useRef, useEffect } from 'react';
import { Animated, Image, View, Dimensions } from 'react-native';

export default function _animate(props) {
  const { duration } = props;
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const position = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    const moveAnimation = () => {
      const toValueX = Math.random() * (deviceWidth - 20);
      const toValueY = Math.random() * (deviceHeight - 20);

      Animated.timing(position, {
        toValue: { x: toValueX, y: toValueY },
        duration: duration,
        useNativeDriver: true,
      }).start(() => {
        moveAnimation();
      });
    };

    moveAnimation();
  }, [position, duration, deviceWidth, deviceHeight]);

  return (
    <View>
      <Animated.Image
        source={require('./assets/ball.png')}
        style={{
          width: 20,
          height: 20,
          transform: position.getTranslateTransform(),
        }}
      />
    </View>
  );
}
