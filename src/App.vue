<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import introduce from '@/components/Intro.vue'
import querybox from '@/components/QueryBox.vue'

export default {
  name: 'app',
  components: {
    introduce,
    querybox
  }
}
</script>
