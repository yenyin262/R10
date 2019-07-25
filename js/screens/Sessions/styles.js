import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  locationTitle: {
    marginTop: 30,
    marginLeft: 20,
    color: "#999999",
    fontSize: 20,
    fontFamily: "Montserrat"
  },
  sessionTitle: {
    fontSize: 30,
    marginTop: 20,
    fontFamily: "Montserrat",
    color: "black",
    marginLeft: 20
  },

  time: {
    color: "#cf392a",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat",
    marginTop: 20,
    marginLeft: 20
  },
  description: {
    marginHorizontal: 10,
    fontFamily: "Montserrat",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "200"
  },
  subText: {
    marginTop: 30,
    marginLeft: 20,
    color: "#999999",
    fontSize: 20,
    fontFamily: "Montserrat",
    marginBottom: 20
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    // marginTop: 20,
    marginLeft: 20
  },
  speakerContainer: {
    flexDirection: "row",

    alignItems: "center"
  },
  speakerName: {
    fontSize: 19,
    marginLeft: 10,
    fontFamily: "Montserrat",
    paddingHorizontal: 5
  },
  lineSeparator: {
    width: "90%",
    alignSelf: "center",
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    marginTop: 60
    // marginBottom: "auto"
  },

  favebuttonContainer: {
    // marginRight: 40,
    // marginLeft: 40,
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: "#9963ea",

    // borderWidth: 0.5,
    height: 50
    // marginTop: "auto",
  },
  faveText: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    fontFamily: "Montserrat",
    flexDirection: "column-reverse"
    // alignItems: "flex-end"
  },

  favebutton: {
    borderRadius: 37.5
  }
});

export default styles;
