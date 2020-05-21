<template>
  <v-container>
    <v-layout row>
      <v-flex
        xs12
      >
        <v-card
          class="mx-auto"
        >
          <v-img
            :src="ad.imageSrc"
            height="300px"
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
              class="warning"
            >
              Edit
            </v-btn>

            <v-btn
              raised
              class="success"
            >
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>
