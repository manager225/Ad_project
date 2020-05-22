<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          text
          class="primary"
          v-on="on"
        >
          Buy
        </v-btn>
      </template>

      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h1 class="text--primary">Do you wan't to buy it?</h1>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <v-text-field
                  name="name"
                  label="Your name"
                  type="text"
                  v-model="name"
                  :disabled="localLoading"
                ></v-text-field>
                <v-textarea
                  name="phone"
                  label="Your phone"
                  type="text"
                  multi-line
                  v-model="phone"
                  :disabled="localLoading"
                  :loading="localLoading"
                ></v-textarea>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="onCancel">Close</v-btn>
                <v-btn class="success" text @click="onSave">Buy it!</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      dialog: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onCancel () {
      this.name = ''
      this.phone = ''
      this.dialog = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.dialog = false
          })
      }
    }
  }
}
</script>
