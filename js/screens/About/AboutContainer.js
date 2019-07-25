// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, ActivityIndicator, Platform } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import About from "./About";
import { colors } from "../../config/styles";
import styles from "./styles";

const QUERY_ABOUT = gql`
  query {
    allConducts {
      id
      title
      description
    }
  }
`;
class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
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

// const styles = StyleSheet.create({
//   indicator: {
//     width: 200,
//     height: 200
//   }
// });
export default AboutContainer;
