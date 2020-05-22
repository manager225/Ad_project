<template>
  <v-container>
    <v-layout row>
      <v-flex
        xs12
      >
        <v-card
          class="mx-auto"
          v-if="!loading"
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
            <app-edit-ad-modal :ad="ad" class="mr-2" v-if="isOwner"></app-edit-ad-modal>

            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-center">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    appEditAdModal: EditAdModal
  }
}
</script>
