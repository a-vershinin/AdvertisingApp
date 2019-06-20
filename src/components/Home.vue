<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="slide of ads" :key="slide.id" :src="slide.imageSrc">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row>
        <v-flex xs12>
          <h1>Home page</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
