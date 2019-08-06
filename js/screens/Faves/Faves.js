import React from "react";
import { View, Text } from "react-native";
import SessionDataList from "../../components/SessionDataList";
import PropTypes from "prop-types";
import styles from "./styles";

const Faves = ({ data, faveIds }) => {
  return faveIds.length > 0 ? (
    <View style={styles.favesView}>
      <SessionDataList data={data} faveIds={faveIds} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.favesText}> You have no favorite sessions. </Text>
    </View>
  );
};
Faves.propTypes = {
  data: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};
export default Faves;
