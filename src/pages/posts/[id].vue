<script setup lang="ts">
import type { Post } from "@/types/posts";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { formatDate } from "@/utils/date";
import { usePostsStore } from "@/stores/posts";

const route = useRoute();
const postsStore = usePostsStore();

const post = ref<Post | null>(null);
const state = ref<"loading" | "error" | "success">("loading");

async function fetchPost() {
  try {
    const params = route.params as { id: string };
    const res = await postsStore.fetchPost(Number(params.id));
    if (!res) throw new Error("Post not found");
    post.value = res;
    state.value = "success";
  } catch (error) {
    console.debug(error);
    state.value = "error";
  }
}

onMounted(fetchPost);
</script>

<template>
  <v-container class="pa-10">
    <div
      v-if="state === 'error'"
      class="mt-4 d-flex flex-column items-center"
    >
      <v-empty-state
        icon="mdi-magnify"
        text="Could not find the post you were looking for."
        title="Post Not Found"
      />

      <v-btn
        to="/"
        color="primary"
        variant="outlined"
        prepend-icon="mdi-arrow-left"
        class="my-4 mx-auto"
        width="280px"
      >
        Back to Posts
      </v-btn>
    </div>

    <div
      v-else-if="post"
      class="mt-4"
    >
      <v-btn
        to="/"
        color="primary"
        variant="outlined"
        prepend-icon="mdi-arrow-left"
        class="mb-4"
        width="240px"
      >
        Back to Posts
      </v-btn>

      <h1 class="">
        {{ post.title }}
      </h1>
      <p class="text-medium-emphasis">
        {{ post.author }} • {{ formatDate(new Date(post.date)) }}
      </p>

      <div
        class="mt-8"
        v-html="marked(post.text)"
      />
    </div>
  </v-container>
</template>
