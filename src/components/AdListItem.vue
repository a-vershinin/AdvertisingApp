<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="curentAdItem.imageSrc" height="300" />
          <v-card-text>
            <h1 class="text--primary">{{ curentAdItem.title }}</h1>
            <p>
              {{ curentAdItem.desc }}
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" outline>Edit</v-btn>
            <v-btn color="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(['getAdById']),
    curentAdItem() {
      return this.getAdById(this.id);
    },
  },
};
</script>
