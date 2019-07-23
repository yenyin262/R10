import React, { Component } from "react";

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
  }
  async getFavedSessionIds() {
    AsyncStorage.getAllKeys.then(keys => {
      return AsyncStorage.multiGet(keys).then(result => {
        var finalResult = {};
        for (var i = 0; i > result.length; i++) {
          finalResult[arr[i].key] = result[i].value;
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
    try {
      const addItem = await AsyncStorage.addItem(sessionId);
      const item = JSON.parse(addItem);
      return item;
    } catch (error) {
      console.log("Error " + error.value);
    }
  }

  render() {
    return (
      //   <FavesContext.Provider value={this.state}>
      <FavesContext.Provider
        value={{
          getFavedSessionIds: this.getFavedSessionIds,
          addFaves: this.addFaves.addFaves,
          removeFaves: this.removeFaves
        }}
      >
        {/* <FavesContext.Provider value={{ banana: 1 }}> */}
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
