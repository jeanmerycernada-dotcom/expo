import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/src/constants/theme';

type Props = {
  id?: string;
  name: string;
  description: string;
  image: string;
  onPress?: () => void; // opens the post; also switches to the short "feed" caption
};

// Instagram-style post, Telegram dark colors
export default function Card({ id, name, description, image, onPress }: Props) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const n = Number(id) || 1;
  const likes = ((n * 37) % 900) + 20 + (liked ? 1 : 0);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: `https://i.pravatar.cc/150?img=${(n % 70) + 1}` }} style={styles.avatar} />
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Ellipsis size={20} color={colors.textSecondary} />
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

      <Text style={styles.likes}>{likes} likes</Text>
      <Text style={styles.caption} numberOfLines={onPress ? 2 : undefined}>
        <Text style={styles.captionName}>{name} </Text>
        {description}
      </Text>
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
});
