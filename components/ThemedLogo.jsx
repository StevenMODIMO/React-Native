import { Image, useColorScheme } from "react-native";
import LogoDark from "../assets/img/logo_dark.png";
import LogoLight from "../assets/img/logo_light.png";

export default function ThemedLogo({ style, ...props }) {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? LogoDark : LogoLight;
  return <Image source={logo} />;
}
