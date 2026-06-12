import { DarkTheme, DefaultTheme, ThemeProvider, } from '@react-navigation/native';
import { Text, View,  } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import '../globals.css';
import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';


export default function RootLayout() {
  const background = useThemeColor({}, 'background');
  const colorScheme = useColorScheme();

  return (

    <GestureHandlerRootView style={{ flex: 1, backgroundColor: background }}>
      
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-dark-background flex-1 items-center justify-center">
        <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">Hola Mundo</Text>
      </View>
    </ThemeProvider>

      </GestureHandlerRootView>

  );



}
