import Button from '@/src/components/button'
import Input from '@/src/components/input'
import ScreenContainer from '@/src/components/screen-container'
import { API_URL } from '@/src/hooks/use-posts'
import axios from 'axios'
import { router } from 'expo-router'
import { useState } from 'react'
import { ScrollView } from 'react-native'

export default function Create() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const createPost = async () => {
        try {
            await axios.post(API_URL, { name, description, image })
            router.back()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScreenContainer safeTop={false}>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ padding: 20, gap: 16 }}>
                <Input label='Name' onChangeText={(value) => setName(value)} />
                <Input label='Description' onChangeText={(value) => setDescription(value)} />
                <Input label='Image Url' autoCapitalize='none' onChangeText={(value) => setImage(value)} />
                <Button label='Create Post' onPress={createPost} />
            </ScrollView>
        </ScreenContainer>
    )
}
