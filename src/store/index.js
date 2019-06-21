import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import advertising from '@/store/advertising';

Vue.use(Vuex);

const isDevelopment = process.env.NODE_ENV !== 'production';

// middleware
const plagins = [];

if (isDevelopment) {
  plagins.push(createLogger());
}

const auth = {};
const user = {};

export default new Vuex.Store({
  modules: {
    auth,
    user,
    advertising,
  },
  strict: isDevelopment,
  plugins: isDevelopment ? plagins : [],
});
