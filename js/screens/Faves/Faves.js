// expect data and display it
import React from "react";
import { View } from "react-native";
import SessionDataList from "../../components/SessionDataList";
import PropTypes from "prop-types";
import styles from "../Sessions/styles";

const Faves = ({ data, faveIds }) => {
  return faveIds.length > 0 ? (
    <View>
      <SessionDataList
        data={data.allSessions}
        // favCheck={favCheck}
        faveIds={faveIds}
      />
    </View>
  ) : (
    <View>
      <Text style={styles.favesText}> You have no favorite sessions. </Text>
    </View>
  );
};
// Faves.propTypes = {
//   data: PropTypes.array.isRequired
// };
export default Faves;
