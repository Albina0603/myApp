import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { Text, View } from "react-native";

export default function ProfileCard({ name, role, course }) {
  const [count, setCount] = useState(role);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{count}</Text>
      <Button title={name} onPress={() => setCount(count + course)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    gap: 16,
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.8,
  },
  headerImage: {
    height: 180,
    width: 300,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  photo: {
    width: 220,
    height: 220,
    borderRadius: 24,
  },
});
