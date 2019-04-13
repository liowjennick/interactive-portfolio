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

<style lang="sass" scoped>
    #interactive
        position: relative
        margin: 10px
        width: 1400px
        height: 800px
        .bg
            width: 100%
            height: 100%

    html
        background-color: black
</style>

