import CounterButton from "@/components/CounterButton";
import { ProfileCard } from "@/components/ProfileCard";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <CounterButton title="Sign in " step={1} initialValue={0}/>
      <ProfileCard name="Albinaaa" role="studentka molodenkaya" course="4"></ProfileCard>
    </View>
  );
}
