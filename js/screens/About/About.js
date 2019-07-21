// expect data and display it
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

const About = ({ data }) => {
  return (
    <ScrollView>
      <Image source={require("../../assets/project-04/images/r10_logo.png")} />
      <View>
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>
      <View>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, B.C.
        </Text>
      </View>
      {data.allConducts.map(({ id, title, description }) => {
        return (
          <View key={id}>
            <View>
              <Text>{title}</Text>
            </View>
            <View>{/* <Text>{description}</Text> */}</View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default About;
