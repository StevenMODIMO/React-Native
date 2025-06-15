import { View } from "react-native";

export default function Spacer({ width = "100%", height = 40 }) {
  return <View style={{ width, height }} />;
}
