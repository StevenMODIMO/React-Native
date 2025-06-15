import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function ThemedView({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[style, { backgroundColor: theme.background }]}
      {...props}
    />
  );
}
