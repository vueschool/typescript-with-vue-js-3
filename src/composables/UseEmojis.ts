import type Emoji from "@/types/Emoji";
import type { Component } from "@vue/runtime-core";
import { reactive } from "vue";

const files: { [key: string]: unknown } = import.meta.globEager(
  "../assets/icons/emojis/*.svg"
);

export default function UseEmojis() {
  const emojis: { name: string; component: Component }[] = reactive([]);
  for (const path in files) {
    const component = files[path] as Component;
    const name = path
      .replace("../assets/icons/emojis/", "")
      .replace("-emoji.svg", "");
    emojis.push({ name, component });
  }
  /**
   * Get a single emoji component by name
   */
  const findEmoji = (name: Emoji | null) =>
    emojis.find((emoji) => emoji.name === name)?.component;

  return { emojis, findEmoji };
}
