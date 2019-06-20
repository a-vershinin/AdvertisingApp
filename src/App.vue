<template>
  <Layout :links="links">
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',
  components: {
    Layout,
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
