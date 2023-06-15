import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Valor inicial para a opacidade: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // View animada especial
      style={{
        ...props.style,
        opacity: fadeAnim, // Vincula a opacidade ao valor animado
      }}>
      {props.children}
    </Animated.View>
  );
};

export function _FadeIn(props) {
  const { text } = props;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView
        style={{
          width: 250,
          height: 70,
          backgroundColor: 'powderblue',
        }}>
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
          {text}
        </Text>
      </FadeInView>
    </View>
  );
}
