import React from "react";
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 120, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

const AndroidMenu = ({ navigation }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 20 }}
    onPress={() => navigation.openDrawer()}
  >
    <Icon name="md-menu" size={25} color="white" />
  </TouchableOpacity>
);
export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerLeft: Platform.select({
    android: <AndroidMenu navigation={navigation} />
  }),

  headerStyle: {
    backgroundColor: "transparent",
    fontFamily: "Montserrat",
    color: "white"
  }
});
