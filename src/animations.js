import React from 'react';
import {Animated} from 'react-native';

const standard = p => {
  return Animated.sequence([
    Animated.timing(p.animateScale, {
      toValue: 0.95,
      duration: 0,
      useNativeDriver: true,
    }),
    Animated.spring(p.animateScale, {
      toValue: 1,
      bounciness: 1,
      useNativeDriver: true,
    }),
  ]);
};

const bounce = p => {
  return Animated.sequence([
    Animated.timing(p.animateScale, {
      toValue: 1.2,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.spring(p.animateScale, {
      toValue: 1,

      bounciness: 1,
      useNativeDriver: true,
    }),
  ]);
};

const shake = p => {
  return Animated.sequence([
    Animated.timing(p.animateRotation, {
      toValue: 0.1,
      duration: 60,
      useNativeDriver: true,
    }),
    Animated.timing(p.animateRotation, {
      toValue: -0.1,
      duration: 60,
      useNativeDriver: true,
    }),
    Animated.timing(p.animateRotation, {
      toValue: 0.05,
      duration: 60,
      useNativeDriver: true,
    }),
    Animated.timing(p.animateRotation, {
      toValue: -0.05,
      duration: 60,
      useNativeDriver: true,
    }),
    Animated.spring(p.animateRotation, {
      toValue: 0,

      bounciness: 1,
      useNativeDriver: true,
    }),
  ]);
};

export default {
  standard,
  bounce,
  shake,
};
