import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 export default function IconButton   ({ name, color, size = 24, onPress, style })  {
   

  return (
    <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.3 : 1 })}>
      <Ionicons name={name} size={size} color={color} style={{style}}/>
    </Pressable>
  );
};
