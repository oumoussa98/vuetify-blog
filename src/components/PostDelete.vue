<script setup lang="ts">
import { ref } from "vue";
import { usePostsStore } from "@/stores/posts";
import type { Post } from "@/types/posts";

const props = defineProps<{
  post: Post;
}>();

const dialog = ref(false);
const postsStore = usePostsStore();

async function deletePost() {
  await postsStore.deletePost(props.post.id!);
  dialog.value = false;
}
</script>

<template>
  <slot :open-dialog="() => (dialog = true)" />
  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card
      max-width="500"
      prepend-icon="mdi-close"
      :title="`Delete '${post.title}'?`"
      :text="`Are you sure you want to delete this post by ${post.author}? This action cannot be undone.`"
    >
      <template #actions>
        <v-btn
          class="ms-auto me-2"
          text="Cancel"
          @click="dialog = false"
        />
        <v-btn
          class="px-6"
          color="error"
          variant="tonal"
          text="Delete"
          prepend-icon="mdi-delete"
          @click="deletePost"
        />
      </template>
    </v-card>
  </v-dialog>
</template>
