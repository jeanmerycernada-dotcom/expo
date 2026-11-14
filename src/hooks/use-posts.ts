import axios from 'axios';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

export type Post = { id: string; name: string; description: string; image: string };

export const API_URL = 'https://6af3f9fe55a1de7dcf03745a.mockapi.io/api/products/items';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);

  const load = useCallback(async (pull = false) => {
    pull ? setRefreshing(true) : setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(API_URL);
      setPosts([...data].sort((a: Post, b: Post) => Number(b.id) - Number(a.id)));
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  return { posts, loading, refreshing, error, refresh: () => load(true), reload: () => load() };
}
