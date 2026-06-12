import { View, type ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props extends ViewProps {
  className?: string
  margin?: boolean
  safe?: boolean
  bgColor?: string
}

export default function ThemedView({ className, margin = false, safe = false, bgColor, style, children, ...rest }: Props) {
  const themeBackgroundColor = useThemeColor({}, 'background')
  const backgroundColor = bgColor ?? themeBackgroundColor
  const safeArea = useSafeAreaInsets()

  return (
    <View
      style={[{
        backgroundColor,
        flex: 1,
        paddingTop: safe ? safeArea.top : 0,
        paddingBottom: safe ? safeArea.bottom : 0,
        marginHorizontal: margin ? 16 : 0,
      }, style]}
      className={className}
      {...rest}
    >
      {children}
    </View>
  )
}
