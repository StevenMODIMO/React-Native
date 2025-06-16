import { SafeAreaView, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThemedView({ style, safe = false, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  if (!safe)
    return (
      <View style={[style, { backgroundColor: theme.background }]} {...props} />
    );

  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[
        style,
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
      {...props}
    />
  );
}
