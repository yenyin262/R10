// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Map from "./Map";
import { colors } from "../../config/styles";

class MapContainer extends Component {
  render() {
    return (
      <View>
        <Text>Map</Text>
      </View>
    );
  }
}

export default MapContainer;
