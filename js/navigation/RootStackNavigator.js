import { createAppContainer, createStackNavigator } from "react-navigation";
import NavigationLayout from "../navigation/NavigationLayout";

// fn 1 param screen object 2nd object
//- configuration object neded to store in the options

const screensObject = {
  Layout: NavigationLayout
};

const navigatiorConfig = {
  mode: "modal",
  headerMode: "none"
};

const AppNavigator = createStackNavigator(screensObject, navigatiorConfig);
export default createAppContainer(AppNavigator);
