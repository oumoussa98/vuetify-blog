<script setup lang="ts">
import type { Post } from "@/types/posts";
import PostCard from "@/components/PostCard.vue";

defineProps<{ posts: Post[] }>();
</script>

<template>
  <v-row>
    <v-col
      v-for="post in posts"
      :key="post.id"
      cols="12"
      md="6"
    >
      <PostCard :post="post" />
    </v-col>
  </v-row>
</template>
