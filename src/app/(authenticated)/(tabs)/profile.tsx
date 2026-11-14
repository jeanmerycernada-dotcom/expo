import Button from "@/src/components/button";
import ScreenContainer from "@/src/components/screen-container";
import { avatar as avatarImage } from "@/src/constants/images";
import { colors } from "@/src/constants/theme";
import { router } from "expo-router";
import { Bookmark, Camera, LayoutGrid } from "lucide-react-native";
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function Profile() {
  const { width } = useWindowDimensions();
  const avatar = Math.max(72, Math.min(96, Math.round(Math.min(width, 640) * 0.24)));

  // Your own posts. Empty for now; the home feed shows other people's posts.
  const myPosts: { id: string; image: string }[] = [];

  const stats = [[myPosts.length, "Posts"], ["1,204", "Followers"], ["389", "Following"]];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.username}>jean_mery</Text>

        <View style={styles.top}>
          <Image source={avatarImage}
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

        {myPosts.length === 0 && (
          <View style={styles.empty}>
            <View style={styles.emptyIcon}><Camera size={34} color={colors.text} /></View>
            <Text style={styles.emptyTitle}>No posts yet</Text>
            <Text style={styles.emptyText}>Photos you share will appear here.</Text>
          </View>
        )}
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
  empty: { alignItems: "center", paddingVertical: 50, gap: 8 },
  emptyIcon: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: colors.text, alignItems: "center", justifyContent: "center", marginBottom: 6 },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: "bold" },
  emptyText: { color: colors.textSecondary, fontSize: 14 },
});
