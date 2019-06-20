<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat v-for="link of links" :key="link.title" :to="link.url">
      <v-icon left>{{ link.icon }}</v-icon>
      {{ link.title }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  props: ['links'],
};
</script>
