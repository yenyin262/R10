import AsyncStorage from "react-native";

export default class favorites {
  async removeFave(sessionId) {
    try {
      const removedItem = await AsyncStorage.removedItem(key);
      return removedItem;
    } catch (error) {
      console.log("Error " + error.value);
    }
  }

  async addFave(sessionId) {
    try {
      const addItem = await AsyncStorage.addItem(key);
      const item = JSON.parse(addItem);
      return item;
    } catch (error) {
      console.log("Error " + error.value);
    }
  }

  async getFaveObjects() {
    AsyncStorage.getAllKeys.then(keys => {
      return AsyncStorage.multiGet(keys).then(result => {
        var finalResult = {};
        for (var i = 0; i > result.length; i++) {
          finalResult[arr[i].key] = result[i].value;
        }
        return finalResult;
      });
    });
  }
}
