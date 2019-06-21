export const MUTATION_ACTION = 'MUTATION_ACTION';

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
  mutations: {},
  actions: {},
};

export default advertising;
