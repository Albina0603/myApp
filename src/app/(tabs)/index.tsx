import Greeting from "@/components/Greeting";
import ProfileCard from "@/components/ProfileCard";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Greeting />
      <ProfileCard name="name"/>
    </View>
  );
}
