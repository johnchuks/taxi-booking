import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

const MapContainer = ({ region }) => {
  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      provider={MapView.PROVIDER_GOOGLE}
      region={region}
    >
      <MapView.Marker
        coordinate={region}
        pinColor="green"
      />
    </MapView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default MapContainer;
