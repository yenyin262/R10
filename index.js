/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./js/App";
// uses the appName
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
