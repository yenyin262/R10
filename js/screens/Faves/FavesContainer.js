import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Faves from "./Faves";
import LoaderScreen from "../../components/LoadingScreen";
import FavesContext from "../../context/FavesContext";

const QUERY_SESSIONS = gql`
  query {
    allSessions(orderBy: startTime_ASC) {
      id
      startTime
      title
      location
      description
    }
  }
`;

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

  static contextType = FavesContext;
  render() {
    return (
      <View>
        <Query query={QUERY_SESSIONS}>
          {({ loading, data, error }) => {
            if (loading) return <LoaderScreen />;
            if (error) return <Text> Error :(</Text>;

            return (
              <Faves
                data={data.allSessions.filter(session =>
                  this.context.faveIds.includes(session.id)
                )}
                faveIds={this.context.faveIds}
              />
            );
          }}
        </Query>
      </View>
    );
  }
}

export default FavesContainer;
