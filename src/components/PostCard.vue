<script setup lang="ts">
import type { Post } from "@/types/posts";
import { formatDate } from "@/utils/date";

const props = defineProps<{ post: Post }>();

const excerpt = computed(() => {
  const words = props.post.text.split(" ");
  return words.slice(0, 20).join(" ");
});
</script>

<template>
  <v-card
    elevation="16"
    class="h-100 d-flex flex-column"
  >
    <v-card-item>
      <v-card-title>
        {{ props.post.title }}
      </v-card-title>

      <v-card-subtitle class="text-small">
        {{ props.post.author }} • {{ formatDate(new Date(props.post.date)) }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="text-medium-emphasis">
      {{ excerpt }}
    </v-card-text>

    <v-card-actions class="mt-auto">
      <v-list-item class="w-100 px-2">
        <v-btn
          :to="`/posts/${props.post.id}`"
          color="secondary"
          text="Read More"
          append-icon="mdi-arrow-right"
          variant="text"
        />

        <template #append>
          <div class="justify-self-end">
            <PostEdit
              v-slot="activatorProps"
              :post="props.post"
            >
              <v-btn
                icon
                color="primary"
                v-bind="activatorProps"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </PostEdit>
            <PostDelete
              v-slot="{ openDialog }"
              :post="props.post"
            >
              <v-btn
                icon
                color="error"
                @click="openDialog"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </PostDelete>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
