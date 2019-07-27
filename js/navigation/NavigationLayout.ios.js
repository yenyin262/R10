import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import Icon from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import SessionScreen from "../screens/Sessions";
import ScheduleScreen from "../screens/Schedule";
import MapScreen from "../screens/Map";
import FavesScreen from "../screens/Faves";
import { colors } from "../config/styles";
// import NativeAppEventEmitter from "react-native";

// takes 2 objects = param
// name of screen a.
// configuration of screen
// moseratt - light - ios
//moserat - android
const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // sharenavigationoptions - need to use the default props
      //pass the navigation prop/event to sharednavigation options
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
// Dedicated stacks for Schedule and Faves will go here too!

const TabNavigator = createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === "Faves") {
          iconName = `ios-heart`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        } else if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "About") {
          iconName = `ios-information-circle`;
        }
        return (
          <Icon
            name={iconName}
            size={27}
            color={tintColor}
            style={{ paddingTop: 5, paddingBottom: 10 }}
          />
        );
      }
    }),

    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: colors.MediumGrey,

      labelStyle: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "white"
      },

      style: {
        backgroundColor: "black"
      }
    }
  }
);
export default TabNavigator;
