// create query
// return about component
// props to about container

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform
} from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Faves from "./Faves";
import { colors } from "../../config/styles";

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves",
    headerTitleStyle: {
      color: "white",
      fontSize: 24,
      ...Platform.select({
        android: { marginVertical: 10, fontFamily: "Montserrat-Regular" },
        ios: { marginBottom: 10, fontFamily: "Montserrat" }
      })
    }
  };
  render() {
    return (
      <View>
        <Text>Faves</Text>
      </View>
    );
  }
}

export default FavesContainer;
