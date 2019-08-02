import React, { Component } from "react";
import { Text, Platform } from "react-native";
import Map from "./Map";
import { fonts } from "../../config/styles";
import styles from "./styles";

const mapOS = Platform.select({
  ios: <Map />,
  android: <Text style={styles.mapText}>Maps currently not available</Text>
});

class MapContainer extends Component {
  static navigationOptions = {
    title: "Maps",
    headerTitleStyle: {
      color: "white",
      fontSize: 24,
      ...Platform.select({
        android: { marginVertical: 10, fontFamily: "Montserrat-Regular" },
        ios: { marginBottom: 10, fontFamily: fonts.baseFont }
      })
    }
  };
  render() {
    return mapOS;
  }
}

export default MapContainer;
