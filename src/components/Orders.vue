<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line>
          <v-list-tile avatar v-for="order of orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox
                color="info"
                :input-value="order.done"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn color="primary" :to="'/ad/' + order.id">Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 'mda12',
          name: 'Bob',
          phone: '1-999-666-66-66',
          adId: '123',
          done: false,
        },
      ],
    };
  },
  methods: {
    markDone(order) {
      return {
        ...order, done: true,
      };
    },
  },
};
</script>
