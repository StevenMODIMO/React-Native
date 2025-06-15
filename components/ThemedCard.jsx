import { StyleSheet, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function ThemedCard({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[styles.card, style, { backgroundColor: theme.uiBackground }]}
      {...props}
    ></View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
