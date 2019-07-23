import React, { Component } from "react";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import { FavesProvider } from "./context/FavesContext";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

export default App;
