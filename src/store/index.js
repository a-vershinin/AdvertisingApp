import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const isDevelopment = process.env.NODE_ENV !== 'production';

// middleware
const plagins = [];

if (isDevelopment) {
  plagins.push(createLogger());
}

const auth = {};
const user = {};
const advertising = {};

export default new Vuex.Store({
  modules: {
    auth,
    user,
    advertising,
  },
  strict: isDevelopment,
  plugins: isDevelopment ? plagins : [],
});
