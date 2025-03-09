import { ref, computed } from 'vue';
import { marked } from 'marked';

export function useMarked(initialValue: string = '') {
  const markdown = ref(initialValue);
  const htmlPreview = computed(() => marked(markdown.value));

  return { markdown, htmlPreview };
}