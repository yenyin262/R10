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
import Schedule from "./Schedule";
import { colors } from "../../config/styles";
import FavesContext from "../../context/FavesContext";
import LoaderScreen from "../../components/LoadingScreen";

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
      ...Platform.select({
        android: { marginVertical: 10, fontFamily: "Montserrat-Regular" },
        ios: { marginBottom: 10, fontFamily: "Montserrat" }
      })
    }
  };

  static contextType = FavesContext;

  // async componentDidMount() {
  //   this.getFavedSessionsIds;
  //   try {
  //     const myFaves = await this.context.getFavedSessionIds();
  //    return myFaves
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  render() {
    return (
      <View>
        <Query query={QUERY_SCHEDULE}>
          {({ loading, data, error }) => {
            if (loading) return <LoaderScreen />;

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

ScheduleContainer.propTypes = {
  // classes: PropTypes.object.isRequired
};
export default ScheduleContainer;
