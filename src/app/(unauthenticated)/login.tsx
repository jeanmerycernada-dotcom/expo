import Button from '@/src/components/button'
import Input from '@/src/components/input'
import ScreenContainer from '@/src/components/screen-container'
import { colors } from '@/src/constants/theme'
import { router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

export default function Login() {
  return (
    <ScreenContainer>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
        <View style={{ width: '100%', maxWidth: 420, alignSelf: 'center', gap: 16 }}>
          <Text style={{ color: colors.text, fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>Welcome back</Text>
          <Input label='Email' autoCapitalize='none' keyboardType='email-address'/>
          <Input label='Password' secureTextEntry={true}/>
          <Button label='Login' onPress={() => router.push('/home')}/>
          <Button label='Create Account' variant='secondary' onPress={() => router.push('/register')}/>
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}
