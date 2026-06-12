import ThemedView from "@/presentation/shared/ThemedView";
import { Text } from "react-native";

export default function IndexScreen() {
  return (

    <ThemedView margin>
   
      <Text className="text-3xl font-bold text-light-text dark:text-dark-text">
        Hola mundo
      </Text>
  

    </ThemedView>
  );
}
