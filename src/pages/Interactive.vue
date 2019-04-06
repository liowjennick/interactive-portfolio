<template lang="pug">
    #interactive
        img.bg(src="../assets/interactive/background/BG.png")
        Player
</template>

<script>
import Player from '../components/Player.vue'

export default {
  name: 'Interactive',
  components: {
      Player
  },
  data: function() {
      return {
          test: 'someValue'
      }
  }
}
</script>

<style lang="sass">
    #interactive
        position: relative
        .bg
            width: 1400px
            height: 800px
</style>

