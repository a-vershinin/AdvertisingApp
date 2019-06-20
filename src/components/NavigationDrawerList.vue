<template>
  <v-list>
    <v-list-tile v-for="link of links" :key="link.title" :to="link.url">
      <v-list-tile-action>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title v-text="link.title"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: ['links'],
};
</script>
