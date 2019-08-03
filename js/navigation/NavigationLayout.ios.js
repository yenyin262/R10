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
import { colors, fonts } from "../config/styles";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
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
            size={30}
            color={tintColor}
            style={{ top: 10, paddingBottom: 10 }}
          />
        );
      }
    }),

    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: colors.MediumGrey,

      labelStyle: {
        fontSize: 14,
        fontFamily: fonts.baseFont,
        fontWeight: "500",
        top: 10
      },

      style: {
        backgroundColor: "black"
      }
    }
  }
);
export default TabNavigator;
