import React from "react";
import { View } from "react-native";
import SessionDataList from "../../components/SessionDataList";
import PropTypes from "prop-types";

const Schedule = ({ data, faveIds }) => {
  return (
    <View>
      <SessionDataList data={data.allSessions} faveIds={faveIds} />
    </View>
  );
};

// Schedule.propTypes = {
//   data: PropTypes.Object.isRequired,
// faveIds: PropTypes.Array.isRequired
// };

export default Schedule;
