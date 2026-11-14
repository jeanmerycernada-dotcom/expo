import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { colors } from '@/src/constants/theme'

interface BtnProps extends TouchableOpacityProps {
    label: string
    variant?: 'primary' | 'secondary'
}

export default function Button({ label, variant = 'primary', style, ...props }: BtnProps) {
  return (
    <TouchableOpacity
      style={[styles.base, { backgroundColor: variant === 'primary' ? colors.accent : colors.surface }, style]}
      {...props}>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: { height: 50, borderRadius: 12, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
  label: { color: colors.text, fontSize: 16, fontWeight: 'bold' },
})
