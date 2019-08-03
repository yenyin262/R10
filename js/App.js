import React, { Component } from "react";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import { FavesProvider } from "./context/FavesContext";

// the whole app has that value from favescontext
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
