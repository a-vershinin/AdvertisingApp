<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <NavigationDrawerList :links="links" />
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link :to="'/'" tag="span" class="pointer">Advertising App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <NavigationToolbarList :links="links" />
    </v-toolbar>
    <v-content>
      <slot></slot>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import NavigationDrawerList from '@/components/NavigationDrawerList';
import NavigationToolbarList from '@/components/NavigationToolbarList';

export default {
  props: ['links'],
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    NavigationDrawerList,
    NavigationToolbarList,
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
