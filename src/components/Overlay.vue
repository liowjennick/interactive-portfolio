<template lang="pug">
  .overlay
    .overlay-bg
    .overlay-content
      h1 {{ overlayTitle }}
</template>

<script>
  export default {
    name: 'overlay',
    props: ['overlayTitle'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="sass" scoped>
  .overlay
    position: absolute
    top: 0
    height: 100%
    width: 100%
    .overlay-bg
      position: absolute
      top: 0
      height: 100%
      width: 100%
      background-color: black
      opacity: 0.5
    .overlay-content
      position: absolute
      display: flex
      align-items: center
      justify-content: center
      top: 0
      height: 100%
      width: 100%
      h1
        text-align: center
</style>
