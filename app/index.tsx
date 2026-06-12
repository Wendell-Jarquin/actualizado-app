import { Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-light-background dark:bg-dark-background">
      <Text className="text-3xl font-bold text-light-text dark:text-dark-text">
        HOLA MUNDO
      </Text>
    </View>
  );
}
