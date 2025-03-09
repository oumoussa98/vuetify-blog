<template>
  <v-empty-state
    icon="$info"
    class="mt-14"
  >
    <template #media>
      <v-icon color="surface-variant" />
    </template>

    <template #headline>
      <div class="text-h4">
        No Posts Yet!
      </div>
    </template>

    <template #text>
      <div class="text-medium-emphasis text-caption">
        It looks like you haven't created any posts yet. Why not start sharing
        your thoughts? Click create new post button above to get started.
      </div>
    </template>
  </v-empty-state>
</template>
