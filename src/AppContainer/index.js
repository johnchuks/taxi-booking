import React , { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Router } from "react-native-router-flux";
import { Provider } from "react-redux";
import scenes from '../components/routes/scenes';

const AppContainer = ({ store }) => {
  return (
    <Provider store={store}>
      <Router scenes={scenes} />
    </Provider>)

}
export default AppContainer;
