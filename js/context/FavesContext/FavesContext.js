import React, { Component } from "react";
import { AsyncStorage } from "react-native";
//import { getFavs } from "../../config/models";

// create context is what
// allows us to do similar things to a global state
// create a context component insert a value
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
        var finalResult = [];
        console.log(result, "results");
        for (const i of result) {
          finalResult[i[0]] = i[0];
        }

        this.setState({ faveIds: finalResult });
        console.log(finalResult, "myFaves");
        return finalResult;
      });
    });
  }

  // testing === to debug
  // componentDidMount() {
  //   this.getFavedSessionIds();
  // }
  //   async getFavedSessionIds() {
  //     return AsyncStorage.getAllKeys().then(keys => {
  //       return AsyncStorage.multiGet(keys).then(result => {
  //         var finalResult = ["a", "b"];
  //         console.log(result, "results");
  //         for (const i of result) {
  //           finalResult[i[0]] = i[0];
  //         }

  //         this.setState({ faveIds: finalResult });
  //         return finalResult;
  //       });
  //     });
  //   }

  async removeFaves(sessionId) {
    try {
      const removedItem = await AsyncStorage.removeItem(sessionId);
      return removedItem;
    } catch (error) {
      console.log(error);
    }
  }

  // getFavedSessionIds = async () => {
  //   try {
  //     const myFavs = await getFavs();
  //     const myFavsIds = myFavs.map(favs => favs[0]);
  //     this.setState({ faveIds: myFavsIds });
  //   } catch (e) {
  //     return false;
  //   }
  // };

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
          ///{testing to debug
          // ...this.state},
          getFavedSessionIds: this.getFavedSessionIds.bind(this),
          addFaves: this.addFaves.bind(this),
          removeFaves: this.removeFaves.bind(this)
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
