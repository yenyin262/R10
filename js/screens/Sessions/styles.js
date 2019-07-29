import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  locationTitle: {
    marginHorizontal: 20,
    marginVertical: 22,
    color: "#999999",
    fontSize: 20,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    })
  },
  sessionTitle: {
    fontSize: 32,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: "#999999"
      },
      ios: { fontFamily: "Montserrat", color: "black" }
    }),
    marginHorizontal: 20
  },

  time: {
    color: "#cf392a",
    fontWeight: "600",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        fontSize: 18
      },
      ios: { fontFamily: "Montserrat", fontSize: 20 }
    }),
    marginTop: 20,
    marginHorizontal: 20
  },
  description: {
    marginHorizontal: 20,
    marginVertical: 20,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "light"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "200"
  },
  subText: {
    marginVertical: 15,
    marginHorizontal: 20,
    color: "#999999",
    fontSize: 20,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    marginBottom: 20
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 20
  },
  speakerContainer: {
    flexDirection: "row",

    alignItems: "center"
  },
  speakerName: {
    fontSize: 19,
    marginLeft: 10,

    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    paddingHorizontal: 5
  },
  lineSeparator: {
    width: "90%",
    alignSelf: "center",
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    marginVertical: 15
  },

  favebuttonContainer: {
    marginVertical: 13,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50
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
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    flexDirection: "column-reverse"
  },

  favebutton: {
    borderRadius: 37.5,
    marginHorizontal: 55
  },

  favIcon: {
    color: "#cf392a",
    marginVertical: 22
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%"
  }
});

export default styles;
