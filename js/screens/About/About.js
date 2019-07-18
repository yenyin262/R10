// expect data and display it
import React from "react";
import { View, Text, ScrollView } from "react-native";
const About = ({ data }) => {
  return (
    <ScrollView>
      {data.allConducts.map(({ title, description }) => {
        return (
          <View key={title}>
            <View>
              <Text>{title}</Text>
            </View>
            <View>
              <Text>{description}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default About;
