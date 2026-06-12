import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";

export default function IndexScreen() {
  return (

    <ThemedView margin>
      <ThemeText className="mt-10">Hola mundo Base</ThemeText>

      <ThemeText type="h1"
      className="mt-5 text-light-primary dark:text-dark-primary">Hola mundo H1
      </ThemeText>

      <ThemeText type="link"className="mt-5">Soy un enlace</ThemeText>


    </ThemedView>

  );
}
