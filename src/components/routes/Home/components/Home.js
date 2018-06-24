import React , { Component } from 'react';
import { Container } from "native-base";
import MapContainer from './mapContainer/index';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setName();
  }
  render() {
    const region = {
      longitude:3.365344,
      latitude:6.576421,
      longitudeDelta:0.0421,
      latitudeDelta:0.0922,
    }
    return (
      <Container>
        <MapContainer 
          region={region}
        />
      </Container>
    )
  }
}

export default Home;
