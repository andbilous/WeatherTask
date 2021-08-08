import React from 'react';
import {Text, View} from 'react-native';

export const Main = () => {
  console.log(24);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>Home Screen</Text>
    </View>
  );
};
