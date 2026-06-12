import { View, type ViewProps } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props extends ViewProps {
  className?: string
  margin?: boolean
  safe?: boolean
  bgColor?: string
}

export default function ThemedView({ className, margin, safe, bgColor, style, ...rest }: Props) {
  const backgroundColor = bgColor ?? useThemeColor({}, 'background')

  return (
    <View
      className={className}
      style={[{ backgroundColor }, style]}
      {...rest}
    />
  )
}
