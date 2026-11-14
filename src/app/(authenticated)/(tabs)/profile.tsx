import Button from "@/src/components/button";
import ScreenContainer from "@/src/components/screen-container";
import { colors } from "@/src/constants/theme";
import { usePosts } from "@/src/hooks/use-posts";
import { router } from "expo-router";
import { Bookmark, LayoutGrid } from "lucide-react-native";
import { useState } from "react";
import { ActivityIndicator, Image, Pressable, RefreshControl, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

const GAP = 2;

export default function Profile() {
  const { posts, loading, refreshing, refresh } = usePosts();
  const { width } = useWindowDimensions();
  const [gridW, setGridW] = useState(0);
  const avatar = Math.max(72, Math.min(96, Math.round(Math.min(width, 640) * 0.24)));
  const cols = gridW >= 520 ? 4 : 3; // more columns when there's room
  const tile = Math.floor((gridW - GAP * (cols - 1)) / cols);

  const stats = [[posts.length, "Posts"], ["1,204", "Followers"], ["389", "Following"]];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor={colors.accent} />}>
        <Text style={styles.username}>jean_mery</Text>

        <View style={styles.top}>
          <Image source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={[styles.avatar, { width: avatar, height: avatar, borderRadius: avatar / 2 }]} />
          <View style={styles.stats}>
            {stats.map(([n, label]) => (
              <View key={label} style={{ alignItems: "center" }}>
                <Text style={styles.statNum}>{n}</Text>
                <Text style={styles.statLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 18, gap: 2 }}>
          <Text style={styles.name}>Jean Mery</Text>
          <Text style={styles.bio}>IT Student 💻{"\n"}Building apps with Expo & React Native</Text>
        </View>

        <View style={styles.buttons}>
          <Button label="New Post" style={{ flex: 1, height: 40 }} onPress={() => router.push("/posts/create")} />
          <Button label="Log out" variant="secondary" style={{ flex: 1, height: 40 }} onPress={() => router.replace("/login")} />
        </View>

        <View style={styles.tabs}>
          <View style={styles.tabActive}><LayoutGrid size={22} color={colors.accent} /></View>
          <View style={styles.tab}><Bookmark size={22} color={colors.textSecondary} /></View>
        </View>

        <View style={styles.grid} onLayout={(e) => setGridW(e.nativeEvent.layout.width)}>
          {loading && posts.length === 0 && <ActivityIndicator color={colors.accent} style={{ margin: 30, alignSelf: "center" }} />}
          {gridW > 0 && posts.map((p) => (
            <Pressable key={p.id} onPress={() => router.push({ pathname: "/posts/[id]", params: { id: p.id } })}>
              <Image source={{ uri: p.image }} style={{ width: tile, height: tile, backgroundColor: colors.surface }} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  username: { fontSize: 20, fontWeight: "bold", color: colors.text, paddingHorizontal: 18, paddingVertical: 16 },
  top: { flexDirection: "row", alignItems: "center", paddingHorizontal: 18, gap: 20, marginBottom: 14 },
  avatar: { borderWidth: 2, borderColor: colors.accent, backgroundColor: colors.surface },
  stats: { flex: 1, flexDirection: "row", justifyContent: "space-around" },
  statNum: { fontSize: 18, fontWeight: "bold", color: colors.text },
  statLabel: { fontSize: 13, color: colors.textSecondary },
  name: { color: colors.text, fontWeight: "bold", fontSize: 15 },
  bio: { color: colors.text, fontSize: 14, lineHeight: 20 },
  buttons: { flexDirection: "row", gap: 8, paddingHorizontal: 18, marginVertical: 16 },
  tabs: { flexDirection: "row", borderTopWidth: 0.5, borderTopColor: colors.border },
  tab: { flex: 1, alignItems: "center", paddingVertical: 12, borderBottomWidth: 1.5, borderBottomColor: "transparent" },
  tabActive: { flex: 1, alignItems: "center", paddingVertical: 12, borderBottomWidth: 1.5, borderBottomColor: colors.accent },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: GAP, paddingTop: GAP },
});
