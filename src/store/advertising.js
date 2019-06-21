export const CREATE_ADVERTESMENT_ASYNC = 'CREATE_ADVERTESMENT_ASYNC';
const CREATE_ADVERTESMENT_LOADING = 'CREATE_ADVERTESMENT_LOADING';
const CREATE_ADVERTESMENT_SUCCESS = 'CREATE_ADVERTESMENT_SUCCESS';
const CREATE_ADVERTESMENT_FAILURE = 'CREATE_ADVERTESMENT_FAILURE';

const advertising = {
  state: {
    ads: [
      {
        id: '1',
        title: 'First ad',
        desc: 'Hello I am description of first Ad',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
      {
        id: '2',
        title: 'Second ad',
        desc: 'Hello I am description of second Ad',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        id: '3',
        title: 'Third ad',
        desc: 'Hello I am description of third Ad',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
    ],
  },
  getters: {
    getAds: state => state.ads,
    getPromoAds: state => state.ads.filter(item => item.promo),
    getMyAds: state => state.ads,
    getAdById: (state, { getAds }) => adId => getAds.find(item => item.id === adId),
  },
  mutations: {
    [CREATE_ADVERTESMENT_LOADING]: state => ({ ...state }),
    [CREATE_ADVERTESMENT_SUCCESS]: (state, payload) => {
      const ads = state.ads.push(payload);

      return { ...state, ads };
    },
    [CREATE_ADVERTESMENT_FAILURE]: state => ({ ...state }),
  },
  actions: {
    [CREATE_ADVERTESMENT_ASYNC]: ({ commit }, payload) => {
      // console.log('payload:', payload);
      const newAdItem = {
        id: String(Math.random()),
        ...payload,
      };

      commit(CREATE_ADVERTESMENT_LOADING);
      try {
        commit(CREATE_ADVERTESMENT_SUCCESS, newAdItem);
      } catch (e) {
        commit(CREATE_ADVERTESMENT_FAILURE, e);
      }
    },
  },
};

export default advertising;
