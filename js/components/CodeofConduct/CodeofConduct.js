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
      // animation has not started
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
    //Animated timing allows for us to define an animation that takes a certain amount of time
    Animated.timing(this.state.bulletPoint, {
      // end of animation will be at 1
      // to value : 1 is the final value of the state
      // it depends on the duration value from the intial value to the final value
      toValue: 1,
      duration: 400
    }).start(animation => {
      //start will cause an animation to trigger
      if (animation.finished) {
        this.setState({ bulletPoint: new Animated.Value(0) });
      }
    });
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { data } = this.props;
    const { collapse, bulletPoint } = this.state;
    // false to true gives that range
    const spinner = bulletPoint.interpolate({
      // mapping input value to outputrnge
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });
    // default variable
    const animatedStyles = { transform: [{ rotate: spinner }] };
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

export default CodeofConduct;
