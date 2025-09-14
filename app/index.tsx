import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useReduxPersistDemo } from "../src/hooks/useReduxPersistDemo";

export default function HomeScreen() {
  const { count, onPressPlus, onPressMinus } = useReduxPersistDemo();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Persist Demo</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressMinus}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={onPressPlus}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  countText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    minWidth: 80,
    textAlign: "center",
  },
});