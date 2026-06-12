import { DarkTheme, DefaultTheme, ThemeProvider, } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import '../globals.css';



export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-dark-background flex-1 items-center justify-center">
        <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">Hola Mundo</Text>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );

}
