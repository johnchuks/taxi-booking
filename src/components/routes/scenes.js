import React, { Component } from 'react';
import { Actions, Scene, Stack } from 'react-native-router-flux';
import HomeContainer from './Home/containers/HomeContainer';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={HomeContainer} title="Home" />
  </Scene>
)
export default scenes;
