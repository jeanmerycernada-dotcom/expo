import Card from '@/src/components/card';
import ScreenContainer from '@/src/components/screen-container';
import { colors } from '@/src/constants/theme';
import { API_URL, Post } from '@/src/hooks/use-posts';
import axios from 'axios';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';

export default function PostById() {
    const { id } = useLocalSearchParams<{ id: string }>()
    const [product, setProduct] = useState<Post>()
    const [loading, setLoading] = useState(false)

    const getProductById = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`${API_URL}/${id}`)
            setProduct(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        getProductById()
    }, []))

    return (
        <ScreenContainer safeTop={false}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.accent} style={{ marginTop: 40 }} />
            ) : product ? (
                <ScrollView><Card id={product.id} name={product.name} description={product.description} image={product.image} /></ScrollView>
            ) : (
                <Text style={{ color: colors.textSecondary, textAlign: 'center', marginTop: 40 }}>Post not found.</Text>
            )}
        </ScreenContainer>
    )
}
