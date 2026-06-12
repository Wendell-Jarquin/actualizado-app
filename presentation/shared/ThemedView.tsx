import { View, type ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Text } from 'react-native'

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}



export default function ThemedView({ className, margin = false, safe = false, bgColor, style, children, ...rest }: Props) {

    // . color de fondo
  const themeBackgroundColor = useThemeColor({}, 'background')

  //. si se pasa un color de fondo por props, se usa ese, sino se usa el color de fondo del tema
  const backgroundColor = bgColor ?? themeBackgroundColor

  //. hook para obtener los insets de la safe area, para evitar que el contenido quede debajo de la barra de estado o la barra de navegación
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
      <Text>{children}</Text>
    </View>
  )
}
