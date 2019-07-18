// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import About from "./About";
import { colors } from "../../config/styles";

const QUERY_ABOUT = gql`
  query {
    allConducts {
      title
      description
    }
  }
`;
class AboutContainer extends Component {
  render() {
    return (
      <View>
        <Query query={QUERY_ABOUT}>
          {({ loading, data, error }) => {
            if (loading)
              return (
                <ActivityIndicator
                  animating={true}
                  size="large"
                  color={colors.Purple}
                  style={styles.indicator}
                />
              );

            if (error) return <Text> Error :(</Text>;
            return <About data={data} />;
          }}
        </Query>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    width: 200,
    height: 200
  }
});
export default AboutContainer;
