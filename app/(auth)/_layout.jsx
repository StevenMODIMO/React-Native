import { StatusBar } from "expo-status-bar";
import ThemedView from "../../components/ThemedView";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
}
