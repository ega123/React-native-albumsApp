//Import a library to help create components
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// create a component

const App = () => {
  return <Header />;
};

// Render it to a device
AppRegistry.registerComponent('Albums', () => App);
