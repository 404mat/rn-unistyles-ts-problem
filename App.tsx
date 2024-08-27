import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
// react-native-unistyles
import "./themes/unistyles";

export default function App() {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.brand50,
    alignItems: "center",
    justifyContent: "center",
  },
}));
