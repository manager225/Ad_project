<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
            <v-btn
              text
              class="warning"
              v-on="on"
            >
              Edit
            </v-btn>
      </template>

            <v-card>
              <v-container>
                <v-layout row>
                  <v-flex xs12>
                    <v-card-title>
                      <h1 class="text--primary">Edit ad</h1>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                  <v-flex xs12>
                    <v-card-text>
                      <v-text-field
                        name="title"
                        label="Title"
                        type="text"
                        v-model="editedTitle"
                      ></v-text-field>
                      <v-textarea
                        name="description"
                        label="Description"
                        type="text"
                        multi-line
                        v-model="editedDescription"
                      ></v-textarea>
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                  <v-flex xs12>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text @click="onCancel">Cancel</v-btn>
                      <v-btn class="success" text @click="onSave">Save</v-btn>
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    }
  },
  methods: {
    onCancel () {
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      this.dialog = false
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
        this.dialog = false
      }
    }
  }
}
</script>
