<script setup lang="ts">
import { usePostsStore } from "@/stores/posts";
import BlogList from "@/components/PostList.vue";
import PostCreate from "@/components/PostCreate.vue";

const postsStore = usePostsStore();

const tags = [
  { text: "All posts", value: "" },
  { text: "Vuetify", value: "vuetify" },
  { text: "Javascript", value: "javascript" },
  { text: "Typescript", value: "typescript" },
];

onMounted(() => postsStore.fetchPosts());
</script>

<template>
  <v-container class="pt-10">
    <v-row>
      <v-col
        cols="12"
        lg="8"
      >
        <div class="d-flex align-center mb-2">
          <v-icon
            icon="mdi-book-open-variant"
            size="64"
            class="mr-4"
          />
          <h1 class="text-h2 font-weight-bold">
            Articles
          </h1>
        </div>
        <p class="text-h6 font-weight-regular mb-2">
          Thoughts, ideas, and experiences from my journey
        </p>

        <v-chip-group
          v-model="postsStore.filter.tag"
          selected-class="text-primary"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag.value"
            :text="tag.text"
            :value="tag.value"
          />
        </v-chip-group>
      </v-col>
    </v-row>

    <div class="d-flex align-center justify-space-between ga-2 flex-wrap mt-10 mb-4">
      <v-text-field
        v-model="postsStore.filter.query"
        density="compact"
        placeholder="Search posts..."
        prepend-inner-icon="mdi-magnify"
        hide-details
        max-width="400"
        width="100%"
      />

      <PostCreate />
    </div>

    <PostEmpty v-if="postsStore.filteredPosts.length === 0" />
    <blog-list :posts="postsStore.filteredPosts" />
  </v-container>
</template>
