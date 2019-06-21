<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new advertising</h1>

        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            name="title"
            label="Add title"
            type="text"
            class="mb-4"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
            required
          ></v-text-field>
          <v-textarea
            type="text"
            name="description"
            label="Add description"
            class="mb-4"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
            required
            multi-line
          >
          </v-textarea>
        </v-form>

        <v-layout row>
          <v-flex xs12>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="blue-grey mb-4"
              class="warning white--text"
            >
              Upload image
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-img
              src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
              height="100"
              aspect-ratio="2.75"
            ></v-img>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-switch label="Add to Promo?" color="primary" v-model="promo"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn color="success" :disabled="!valid" @click="createAd">Create advertising</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { CREATE_ADVERTESMENT_ASYNC } from '../store/advertising';

export default {
  data() {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false,
      loading: false,
    };
  },
  methods: {
    ...mapActions({
      // 'createAdvertesmentAsync',
      createAdvertesmentAsync: CREATE_ADVERTESMENT_ASYNC,
    }),
    createAd() {
      console.log('COMPONENT:', this);
      if (this.$refs.form.validate()) {
        const adItem = {
          title: this.title,
          desc: this.description,
          promo: this.promo,
          imageSrc: 'https://cdn-images-1.medium.com/max/1600/1*ACR0gj0wbx91V_xgURifWg.png',
        };
        // console.log('createAd onSubmit:', adItem);
        this.createAdvertesmentAsync(adItem);
      }
    },
  },
};
</script>
