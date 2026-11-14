import { Tabs } from "expo-router";
import { Home, MessageCircle, User } from 'lucide-react-native';
import { colors } from "@/src/constants/theme";

export default function TabsLayout() {
  return (
   <Tabs screenOptions={{
      headerShown: false,
      sceneStyle: { backgroundColor: colors.bg },
      tabBarStyle: { backgroundColor: colors.bg, borderTopColor: colors.border },
      tabBarActiveTintColor: colors.accent,
      tabBarInactiveTintColor: colors.textSecondary,
   }}>
    <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => <Home color={color} size={size}/>
    }} />
    <Tabs.Screen name="chats" options={{
        title: "Chats",
        tabBarIcon: ({ color, size }) => <MessageCircle color={color} size={size}/>
    }} />
    <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => <User color={color} size={size}/>
    }} />
   </Tabs>
  )
}
