import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left",
    marginTop: 100,
    padding: 20,
  },

  text: {
    fontSize: 20,
    marginBottom: 20,
  },

  picker: {
    width: "100%",
    height: 50,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    height: 200,
    textAlignVertical: "top",
    marginTop: 20,
    marginBottom: 20
  },

  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 250,
    width: '100%'
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
