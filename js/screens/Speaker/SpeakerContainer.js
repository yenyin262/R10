import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
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
    // navigation name of object and navigate directs us to the directed route
    const speaker = navigation.getParam("Speaker");
    return (
      <View
        style={{ backgroundColor: "black", height: "100%", paddingTop: 20 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.modal}>
            <Icon name={closeIcon} size={45} style={styles.icon} />
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
