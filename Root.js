/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import configureStore from './src/store/configureStore';
import AppContainer from './src/AppContainer/index';

export default class Root extends React.Component {
  renderApp() {
      const initialState = window.__INITIAL_STATE__;
      const store = configureStore(initialState);
      return (<AppContainer store={store} />);
  }
  render() {
    return this.renderApp();
  }
}
