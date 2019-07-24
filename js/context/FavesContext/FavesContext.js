import React, { Component } from "react";
import { AsyncStorage } from "react-native";

// create context is what
const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faveIds: []
    };
  }
  async componentDidMount() {
    await getFavedSessionIds();
    this.setState({ faveIds: finalResult });
  }
  async getFavedSessionIds() {
    return AsyncStorage.getAllKeys().then(keys => {
      return AsyncStorage.multiGet(keys).then(result => {
        var finalResult = ["a", "b"];
        console.log(result, "results");
        for (const i of result) {
          finalResult[i[0]] = i[0];
        }

        this.setState({ faveIds: finalResult });
        return finalResult;
      });
    });
  }

  async removeFaves(sessionId) {
    try {
      const removedItem = await AsyncStorage.removedItem(sessionId);
      return removedItem;
    } catch (error) {
      console.log("Error " + error.value);
    }
  }

  async addFaves(sessionId) {
    console.log(sessionId, "sessionid");
    try {
      await AsyncStorage.setItem(sessionId, "savedfave");
      //   const savedItem = await AsyncStorage.setItem(sessionId);
      //   const item = JSON.parse(addItem);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      //FavesContext.Provider - is the beginning where we put values
      // so we can use later
      <FavesContext.Provider
        value={{
          getFavedSessionIds: this.getFavedSessionIds.bind(this),
          addFaves: this.addFaves.bind(this),
          removeFaves: this.removeFaves
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
