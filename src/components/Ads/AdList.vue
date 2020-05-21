<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary mb-3">My ads</h1>
      </v-flex>
    </v-layout>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        v-for="ad of myAds"
        :key="ad.id"
      >
        <v-card
          class="mx-auto mb-4"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="ad.imageSrc"
          >
          </v-img>

          <v-card-title class="text--primary">{{ad.title}}</v-card-title>
          <v-card-text class="text--primary">
            <div>{{ad.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              class="info"
              :to="'/ad/' + ad.id"
            >
              Open
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>
