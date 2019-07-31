import React, { Component } from "react";
import { Text, Platform } from "react-native";
import Map from "./Map";
import { colors, fonts } from "../../config/styles";

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
    return Platform.select({
      ios: <Map />,
      android: <Text>Maps currently not available</Text>
    });
  }
}

export default MapContainer;
