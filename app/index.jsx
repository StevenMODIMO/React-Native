import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import ThemedCard from "../components/ThemedCard";
import Spacer from "../components/Spacer";

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={10} />
      <ThemedText title={true} style={styles.title}>
        The Number 1
      </ThemedText>
      <ThemedText style={{ marginTop: 10, marginBottom: 20 }}>
        Reading List App
      </ThemedText>
      <Spacer height={10} />
      <ThemedCard style={styles.card}>
        <ThemedText>Hello, this is a card.</ThemedText>
      </ThemedCard>
      <Link style={{ marginVertical: 20 }} href="/login">
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link style={{ marginVertical: 20 }} href="/register">
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link style={{ marginVertical: 20 }} href="/profile">
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 30,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
});
