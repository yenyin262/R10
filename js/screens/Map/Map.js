// expect data and display it
import React from "react";
import pinImage from "../../assets/project-04/images/map_pin.png";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

const Map = () => {
  return (
    <MapView
      style={styles.mapView}
      region={{
        latitude: 49.263419,
        longitude: -123.138192,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      <Marker
        coordinate={{ latitude: 49.263419, longitude: -123.138192 }}
        title={"R10"}
        image={pinImage}
        tracksViewChanges={false}
      />
    </MapView>
  );
};

export default Map;
