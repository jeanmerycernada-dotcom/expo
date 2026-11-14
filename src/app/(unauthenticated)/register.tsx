import Button from '@/src/components/button'
import Input from '@/src/components/input'
import ScreenContainer from '@/src/components/screen-container'
import { ScrollView, View } from 'react-native'

export default function Register() {
  return (
    <ScreenContainer safeTop={false}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
        <View style={{ width: '100%', maxWidth: 420, alignSelf: 'center', gap: 16 }}>
          <Input label='Name'/>
          <Input label='Email' autoCapitalize='none' keyboardType='email-address'/>
          <Input label='Password' secureTextEntry={true}/>
          <Input label='Confirm Password' secureTextEntry={true}/>
          <Button label='Register'/>
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}
