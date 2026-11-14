import Card from "@/src/components/card";
import ScreenContainer from "@/src/components/screen-container";
import { colors, stories } from "@/src/constants/theme";
import { usePosts } from "@/src/hooks/use-posts";
import { router } from "expo-router";
import { Plus, Send } from "lucide-react-native";
import { ActivityIndicator, FlatList, Image, Pressable, RefreshControl, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function Home() {
  const { posts, loading, refreshing, error, refresh, reload } = usePosts();
  const { width } = useWindowDimensions();
  const size = Math.max(60, Math.min(76, Math.round(Math.min(width, 640) * 0.17))); // story ring scales with screen

  const Stories = (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.stories}>
      {stories.map((s, i) => (
        <View key={s.name} style={{ alignItems: "center", width: size + 10 }}>
          <View style={[styles.ring, { width: size, height: size, borderRadius: size / 2 }]}>
            <Image source={{ uri: s.image }} style={{ flex: 1, borderRadius: size / 2 }} />
            {i === 0 && <View style={styles.plus}><Plus size={14} color="#fff" /></View>}
          </View>
          <Text style={styles.storyName} numberOfLines={1}>{s.name}</Text>
        </View>
      ))}
    </ScrollView>
  );

  const Empty = loading ? (
    <ActivityIndicator size="large" color={colors.accent} style={{ marginTop: 40 }} />
  ) : (
    <View style={{ alignItems: "center", marginTop: 40, gap: 12 }}>
      <Text style={{ color: colors.textSecondary }}>{error ? "Couldn't load posts." : "No posts yet."}</Text>
      {error && <Pressable onPress={reload}><Text style={{ color: colors.accent, fontWeight: "bold" }}>Try again</Text></Pressable>}
    </View>
  );

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <View style={{ flexDirection: "row", gap: 22 }}>
          <Pressable onPress={() => router.push("/posts/create")} hitSlop={8}><Plus size={28} color={colors.accent} /></Pressable>
          <Pressable onPress={() => router.push("/chats")} hitSlop={8}><Send size={25} color={colors.accent} /></Pressable>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(p) => p.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Stories}
        ListEmptyComponent={Empty}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor={colors.accent} />}
        renderItem={({ item }) => (
          <Card id={item.id} name={item.name} description={item.description} image={item.image}
            onPress={() => router.push({ pathname: "/posts/[id]", params: { id: item.id } })} />
        )}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: { height: 60, paddingHorizontal: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { fontSize: 24, fontWeight: "bold", color: colors.text },
  stories: { paddingHorizontal: 10, paddingVertical: 10, gap: 4 },
  ring: { borderWidth: 2, borderColor: colors.accent, padding: 3 },
  plus: { position: "absolute", bottom: -2, right: -2, width: 22, height: 22, borderRadius: 11, backgroundColor: colors.accent, borderWidth: 2, borderColor: colors.bg, alignItems: "center", justifyContent: "center" },
  storyName: { color: "#AAAAAA", fontSize: 12, marginTop: 6 },
});
