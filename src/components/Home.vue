<template>
  <v-container>
    <v-row>
      <v-col>
        <h5>This is an example application</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { context } from '../mixins/context'

export default {
  name: 'home',
  mixins: [ context ]
}
</script>

<style scoped>

</style>
