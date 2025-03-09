<template>
  <v-container class="d-flex flex-column items-center">
    <v-empty-state
      headline="Whoops, 404"
      title="Page not found"
      text="The page you were looking for does not exist"
      image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
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
  </v-container>
</template>
