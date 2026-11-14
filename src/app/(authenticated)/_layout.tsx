import { Stack } from "expo-router";
import { colors } from "@/src/constants/theme";

export default function DefaultLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: colors.surfaceAlt },
      headerTintColor: colors.text,
      contentStyle: { backgroundColor: colors.bg },
    }}>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false
      }} />
      <Stack.Screen name="posts/create" options={{
        headerTitle: "Create Post"
      }} />
      <Stack.Screen name="posts/[id]" options={{
        headerTitle: "Post"
      }} />
    </Stack>
  )
}
