import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import { colors } from '@/src/constants/theme'

interface InputProps extends TextInputProps {
    label: string
}

export default function Input({ label, style, ...props }: InputProps) {
    return (
        <View style={{ gap: 6 }}>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholderTextColor="#687887" style={[styles.input, style]} {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    label: { color: colors.textSecondary, fontSize: 13 },
    input: { height: 48, borderRadius: 12, backgroundColor: colors.surface, color: colors.text, paddingHorizontal: 14, fontSize: 15 },
})
