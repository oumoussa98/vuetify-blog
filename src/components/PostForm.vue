<script setup lang="ts">
import type { Post } from "@/types/posts";

const emit = defineEmits<{ submit: [] }>();
const formData = defineModel<Omit<Post, "date">>({ required: true });
</script>

<template>
  <v-form
    id="post-form"
    @submit.prevent="emit('submit')"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="formData.title"
            label="Title"
            prepend-inner-icon="mdi-format-title"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="formData.author"
            label="Author"
            prepend-inner-icon="mdi-account"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="formData.text"
            label="Markdown Content"
            rows="14"
            prepend-inner-icon="mdi-language-markdown"
          />
        </v-col>
        <v-col cols="12">
          <slot name="actions" />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
