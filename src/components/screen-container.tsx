import { ReactNode } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, MAX_CONTENT_WIDTH } from '@/src/constants/theme';

// Dark full-width background + centered, max-width column (responsive on tablet/web)
export default function ScreenContainer({ children, safeTop = true }: { children: ReactNode; safeTop?: boolean }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const wide = width > MAX_CONTENT_WIDTH;
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, alignItems: 'center', paddingTop: safeTop ? insets.top : 0 }}>
      <View style={{
        flex: 1, width: '100%', maxWidth: MAX_CONTENT_WIDTH,
        borderLeftWidth: wide ? 1 : 0, borderRightWidth: wide ? 1 : 0, borderColor: colors.border,
      }}>
        {children}
      </View>
    </View>
  );
}
