// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Schedule from "./Schedule";
import { colors } from "../../config/styles";
import FavesContext from "../../context/FavesContext";

const QUERY_SCHEDULE = gql`
  query {
    allSessions {
      id
      startTime
      title
      location
      description
    }
  }
`;
class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
    headerTitleStyle: {
      color: "white",
      fontSize: 24,
      fontFamily: "Montserrat",
      marginBottom: 10
    }
  };

  static contextType = FavesContext;

  render() {
    console.log(this.context, "this is context");
    // need to be able to favorite a schedule item
    // delete fav

    return (
      <View>
        <Query query={QUERY_SCHEDULE}>
          {/* {({ loading, formatSessionData, error }) => { */}

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
            return <Schedule data={data} />;
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
export default ScheduleContainer;
