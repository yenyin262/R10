import { createAppContainer, createStackNavigator } from "react-navigation";
import NavigationLayout from "../navigation/NavigationLayout";
import SpeakerModal from "../screens/Speaker";

const screensObject = {
  Layout: NavigationLayout,
  Speaker: SpeakerModal
};

const navigatiorConfig = {
  mode: "modal",
  headerMode: "none"
};

const AppNavigator = createStackNavigator(screensObject, navigatiorConfig);
export default createAppContainer(AppNavigator);
