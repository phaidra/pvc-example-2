<template>
  <v-row>
    <v-col >
      <span class="youarehere primary--text">{{$t('You are here')}}:</span>
      <template v-for="(item, index) in items">
        <icon :key="'icon'+index" left dark name="univie-right" color="#a4a4a4" width="8px" height="8px" class="mx-1"></icon>
        <span :key="'distext'+index" v-if="item.disabled" class="text" >{{item.text}}</span>
        <template v-else>
          <a :key="'iconex'+index" v-if="item.external" :href="item.to" class="text primary--text">{{item.text}}</a>
          <router-link :key="'link'+index" v-else :to="item.to" class="text primary--text">{{item.text}}</router-link>
        </template>
      </template>
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'p-breadcrumbs',
  props: {
    items: Array
  }
}
</script>

<style scoped>
.youarehere {
  font-weight: bold;
  font-size: 10pt;
}

.text {
  font-size: 10pt;
}
</style>
