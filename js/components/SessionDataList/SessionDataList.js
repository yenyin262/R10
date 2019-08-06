import React, { Component } from "react";
import { View, Text, SectionList, TouchableOpacity } from "react-native";
import styles from "./style";
import { withNavigation } from "react-navigation";
import { formatSessionData } from "../../lib/dataFormatForSchedule";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

class SessionDataList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, navigation, faveIds } = this.props;

    const formatSchedule = formatSessionData(data);
    const favSessionTitle = Platform.select({
      ios: "ios-heart",
      android: "md-heart"
    });
    return (
      <View>
        <SectionList
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Session", { Session: item });
              }}
            >
              <View key={item.id}>
                <View style={styles.container}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <View>
                    <View style={styles.locationContainer}>
                      <Text style={styles.location}>{item.location}</Text>
                      {faveIds.includes(item.id) ? (
                        <Icon
                          name={favSessionTitle}
                          size={18}
                          style={styles.favIcon}
                        />
                      ) : null}
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          sections={formatSchedule}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>{moment(title).format("LT")}</Text>
          )}
          keyExtractor={data => "" + data.id}
        />
      </View>
    );
  }
}

SessionDataList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default withNavigation(SessionDataList);
