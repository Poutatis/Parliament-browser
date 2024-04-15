import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  startPageText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },
  button: {
    backgroundColor: "blue",
  },
});
