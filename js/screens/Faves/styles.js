import { StyleSheet } from "react-native";
import { fonts } from "../../config/styles";

const styles = StyleSheet.create({
  favesText: {
    fontSize: 20,
    marginTop: "20%",
    textAlign: "center",
    ...Platform.select({
      android: {
        container: {
          flex: 1
        },
        fontFamily: fonts.baseFontRegular
      },
      ios: { fontFamily: fonts.baseFont }
    })
  }
});
export default styles;
