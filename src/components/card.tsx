import { Bookmark, Ellipsis, Heart, MessageCircle, Send, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { profiles } from '@/src/constants/images';
import { colors, MAX_CONTENT_WIDTH } from '@/src/constants/theme';

type Props = {
  id?: string;
  name: string;
  description: string;
  image: string;
  onDelete?: () => void; // shows a working "..." menu that deletes the post
  onPress?: () => void; // opens the post; also switches to the short "feed" caption
};

// Instagram-style post, Telegram dark colors
export default function Card({ id, name, description, image, onPress, onDelete }: Props) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const n = Number(id) || 1;
  const likes = liked ? 1 : 0; // starts at 0

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={profiles[n % profiles.length]} style={styles.avatar} />
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        {onDelete ? (
          <Pressable onPress={() => setMenuOpen(true)} hitSlop={10}>
            <Ellipsis size={20} color={colors.textSecondary} />
          </Pressable>
        ) : (
          <Ellipsis size={20} color={colors.textSecondary} />
        )}
      </View>

      <Pressable onPress={onPress} disabled={!onPress}>
        <Image source={{ uri: image }} style={styles.image} />
      </Pressable>

      <View style={styles.actions}>
        <Pressable onPress={() => setLiked(!liked)} hitSlop={8}>
          <Heart size={26} color={liked ? colors.like : colors.text} fill={liked ? colors.like : 'transparent'} />
        </Pressable>
        <MessageCircle size={26} color={colors.text} />
        <Send size={25} color={colors.text} />
        <View style={{ flex: 1 }} />
        <Pressable onPress={() => setSaved(!saved)} hitSlop={8}>
          <Bookmark size={25} color={colors.text} fill={saved ? colors.text : 'transparent'} />
        </Pressable>
      </View>

      <Text style={styles.likes}>{likes} {likes === 1 ? 'like' : 'likes'}</Text>
      <Text style={styles.caption} numberOfLines={onPress ? 2 : undefined}>
        <Text style={styles.captionName}>{name} </Text>
        {description}
      </Text>

      {/* In-app menu opened by the three dots */}
      <Modal visible={menuOpen} transparent animationType="slide" onRequestClose={() => setMenuOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setMenuOpen(false)}>
          <Pressable style={styles.sheet} onPress={() => {}}>
            <View style={styles.handle} />
            <Pressable style={styles.sheetItem} onPress={() => { setMenuOpen(false); onDelete?.(); }}>
              <Trash2 size={22} color={colors.like} />
              <Text style={[styles.sheetText, { color: colors.like }]}>Delete post</Text>
            </Pressable>
            <Pressable style={styles.sheetItem} onPress={() => setMenuOpen(false)}>
              <Text style={styles.sheetText}>Cancel</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { paddingBottom: 18 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 10, gap: 10 },
  avatar: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.surface, borderWidth: 1.5, borderColor: colors.accent },
  name: { flex: 1, color: colors.text, fontWeight: 'bold', fontSize: 15 },
  image: { width: '100%', aspectRatio: 1, backgroundColor: colors.surface },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 14, paddingTop: 12 },
  likes: { color: colors.text, fontWeight: 'bold', fontSize: 14, paddingHorizontal: 14, paddingTop: 8 },
  caption: { color: colors.text, fontSize: 14, lineHeight: 20, paddingHorizontal: 14, paddingTop: 4 },
  captionName: { fontWeight: 'bold' },
  backdrop: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.6)' },
  sheet: { width: '100%', maxWidth: MAX_CONTENT_WIDTH, alignSelf: 'center', backgroundColor: colors.surface, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20, paddingTop: 10, paddingBottom: 30 },
  handle: { alignSelf: 'center', width: 40, height: 4, borderRadius: 2, backgroundColor: colors.border, marginBottom: 8 },
  sheetItem: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 16 },
  sheetText: { color: colors.text, fontSize: 16, fontWeight: '600' },
});
