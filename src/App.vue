<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <NavigationDrawerList :links="links" />
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Advertising App</v-toolbar-title>
      <v-spacer></v-spacer>
      <NavigationToolbarList :links="links" />
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import NavigationDrawerList from './components/NavigationDrawerList';
import NavigationToolbarList from './components/NavigationToolbarList';

export default {
  name: 'App',
  components: {
    NavigationDrawerList,
    NavigationToolbarList,
  },
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'lock', url: '/login' },
        { title: 'Registration', icon: 'face', url: '/registration' },
        { title: 'Orders', icon: 'bookmark_border', url: '/orders' },
        { title: 'New Ad', icon: 'note_add', url: '/new' },
        { title: 'My Ads', icon: 'list', url: '/list' },
      ],
    };
  },
};
</script>
