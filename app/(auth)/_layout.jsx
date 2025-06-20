import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useUser } from "../../hooks/useUser";

export default function AuthLayout() {
  const { user } = useUser();
  console.log(user);
  return (
    <>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
}
