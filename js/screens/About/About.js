import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import CodeofConduct from "../../components/CodeofConduct";

const About = ({ data }) => {
  return (
    <ScrollView>
      <Image
        source={require("../../assets/project-04/images/r10_logo.png")}
        style={styles.image}
      />
      <View style={styles.lineSeparator} />
      <View>
        <Text style={styles.aboutText}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>
      <View>
        <Text style={styles.header}>Date & Venue</Text>
      </View>
      <View>
        <Text style={styles.aboutText}>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, B.C.
        </Text>
        <View>
          <Text style={styles.header}>Code of Conduct</Text>
        </View>
      </View>
      {data.allConducts.map(data => (
        <CodeofConduct key={data.id} data={data} />
      ))}
      <View style={styles.lineSeparator} />
      <Text style={styles.aboutText}> © RED Academy 2017</Text>
    </ScrollView>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired
};
export default About;
