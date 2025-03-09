<script setup lang="ts">
import type { Post } from "@/types/posts";
import { usePostsStore } from "@/stores/posts";

const props = defineProps<{ post: Post }>();
const postsStore = usePostsStore();

const state = ref<"loading" | "error" | "success" | "">("");
const formData = ref<Omit<Post, "date">>({
  title: props.post.title,
  text: props.post.text,
  author: props.post.author,
});
const dialog = ref(false);

function resetForm() {
  formData.value = {
    title: props.post.title,
    text: props.post.text,
    author: props.post.author,
  };
}

function cancelHandler() {
  resetForm();
  dialog.value = false;
}

async function submitHandler() {
  state.value = "loading";

  try {
    await postsStore.updatePost(props.post.id!, formData.value);
    state.value = "success";
    resetForm();
    dialog.value = false;
  } catch (error) {
    console.error("Error updating post:", error);
    state.value = "error";
  }
}
</script>

<template>
  <v-dialog
    v-model="dialog"
    max-width="1200"
    max-height="90vh"
    height="800px"
  >
    <template #activator="{ props: activatorProps }">
      <slot v-bind="activatorProps" />
    </template>

    <v-card
      prepend-icon="mdi-pencil"
      title="Edit Post"
    >
      <v-card-text class="px-2">
        <PostForm
          v-model="formData"
          @submit="submitHandler"
        />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn
          text="Cancel"
          variant="plain"
          @click="cancelHandler"
        />
        <v-btn
          form="post-form"
          type="submit"
          color="primary"
          prepend-icon="mdi-content-save"
          class="px-4"
          text="Save"
          variant="tonal"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
