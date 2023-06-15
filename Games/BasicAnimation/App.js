import React from 'react';
import { StyleSheet, View } from 'react-native';
import PhysicsAnimation from './PhysicsAnimation';

export default function App() {
  return (
    <View style={styles.container}>
      <PhysicsAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
