<template lang="pug">
  v-app
    .menu-container
      .menu-item
        Portfolio
</template>

<script>
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'

export default {
  name: 'App',
  components: {
    Portfolio,
    Timeline
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="sass">
  .menu-container
    padding: 20px
    .menu-item
      position: relative
</style>
