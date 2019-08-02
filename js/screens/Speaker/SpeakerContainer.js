import React, { Component } from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import Speaker from "./Speaker";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;

    const closeIcon = Platform.select({
      ios: "ios-close",
      android: "md-close"
    });
    const iconSize = Platform.select({
      ios: 45,
      android: 30
    });

    const speaker = navigation.getParam("Speaker");
    return (
      <View style={styles.speakerViewContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.modal}>
            <Icon name={closeIcon} size={iconSize} style={styles.icon} />
            <Text style={styles.aboutSpeakerText}> About the Speaker </Text>
          </View>
        </TouchableOpacity>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SpeakerContainer;
