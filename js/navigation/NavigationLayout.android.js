import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AboutScreen from "../screens/About";
import Icon from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import SessionScreen from "../screens/Sessions";
import ScheduleScreen from "../screens/Schedule";
import MapScreen from "../screens/Map";
import FavesScreen from "../screens/Faves";
import { colors } from "../config/styles";

// takes 2 objects = param
// name of screen a.

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

// Dedicated stacks for Schedule and Faves will go here too!
const MyDrawerNavigator = createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "About") {
          iconName = `md-information-circle`;
        }
        return <Icon name={iconName} size={30} color={tintColor} />;
      }
    }),
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: colors.Purple,
      inactiveTintColor: colors.MediumGrey,

      labelStyle: {
        fontSize: 18,
        fontFamily: "Montserrat-Regular",
        fontWeight: "300"
      }
    }
  }
);

export default MyDrawerNavigator;
