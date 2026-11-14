import { Stack } from "expo-router";
import { colors } from "@/src/constants/theme";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: colors.surfaceAlt },
      headerTintColor: colors.text,
      contentStyle: { backgroundColor: colors.bg },
    }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerTitle: "Create Account" }} />
    </Stack>
  )
}
