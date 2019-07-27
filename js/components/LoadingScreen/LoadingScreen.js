import React from "react";
import styles from "./styles";
import { View, ActivityIndicator } from "react-native";
const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        size="large"
        style={styles.indicator}
      />
    </View>
  );
};

export default LoaderScreen;
