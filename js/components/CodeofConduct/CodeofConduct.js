import React, { Component } from "react";
import {
  Platform,
  UIManager,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class CodeofConduct extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      collapse: false,
      bulletPoint: new Animated.Value(0)
    };
  }
  onPress() {
    const configCodeOfConduct = {
      duration: 800,
      update: {
        type: "linear",
        property: "opacity"
      }
    };
    LayoutAnimation.configureNext(configCodeOfConduct);
    Animated.timing(this.state.bulletPoint, {
      toValue: 1,
      duration: 500
    }).start(animation => {
      if (animation.finished) {
        this.setState({ bulletPoint: new Animated.Value(0) });
      }
    });
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { data } = this.props;

    const { collapse, bulletPoint } = this.state;
    const spinner = bulletPoint.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });

    const animatedStyles = {
      transform: [{ rotate: spinner }]
    };

    return (
      <View>
        <TouchableOpacity onPress={() => this.onPress()}>
          <View style={styles.containerText}>
            <Animated.Text style={[styles.add, animatedStyles]}>
              {collapse ? "-" : "+"}
            </Animated.Text>
            <Text style={styles.aboutTitle}> {data.title}</Text>
          </View>
          {collapse && (
            <Text style={styles.description}>{data.description}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

CodeofConduct.propTypes = {
  data: PropTypes.object.isRequired
};

export default CodeofConduct;
