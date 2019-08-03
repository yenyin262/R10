import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Schedule from "./Schedule";
import { fonts } from "../../config/styles";
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
        android: { marginVertical: 10, fontFamily: fonts.baseFontRegular },
        ios: { marginBottom: 10, fontFamily: fonts.baseFont }
      })
    }
  };

  static contextType = FavesContext;

  render() {
    return (
      <View>
        <Query query={QUERY_SCHEDULE}>
          {({ loading, data, error }) => {
            if (loading) return <LoaderScreen />;

            if (error) return <Text> Error :(</Text>;
            return <Schedule data={data} faveIds={this.context.faveIds} />;
          }}
        </Query>
      </View>
    );
  }
}

export default ScheduleContainer;
