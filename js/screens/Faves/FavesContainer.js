// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Faves from "./Faves";
import { colors } from "../../config/styles";

class FavesContainer extends Component {
  render() {
    return (
      <View>
        <Text>Faves</Text>
      </View>
    );
  }
}

export default FavesContainer;
