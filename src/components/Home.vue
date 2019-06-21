<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="slide of ads" :key="slide.id" :src="slide.imageSrc">
              <div class="card-link">
                <v-btn flat :to="'/ad/' + slide.id">{{ slide.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="card of ads" :key="card.id">
          <v-card>
            <v-img :src="card.imageSrc" height="200"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ card.title }}</h3>
                <div>{{ card.desc }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat  :to="'/ad/' + card.id">Open</v-btn>
              <v-btn raised>Buy</v-btn>
            </v-card-actions>
          </v-card>
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

<style scoped>
.card-link {
  position: absolute;
  left: 50%;
  bottom: 50px;
  padding: 5px 15px;
  background: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
