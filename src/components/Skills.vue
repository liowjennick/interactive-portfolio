<template lang="pug">
    .skills-section
        .lightsaber
            .hilt
            .saber-plasma
            .saber
</template>

<script>
  export default {
    name: 'skills'
  }
</script>

<style lang="sass" scoped>
    $grey: #616161

    .lightsaber
        position: relative
        .hilt
            position: absolute
            top: 0
            left: 0
            width: 150px
            height: 25px
            border-radius: 5px 0 0 5px
            border: 1px solid darkslategray
            background-color: $grey
            z-index: 1
        .saber-plasma
            width: 0px
            height: 17px
            background-color: white
            position: absolute
            top: 4px
            left: 150px
            box-shadow: inset -2px 0 15px red
            border-radius: 0 8.5px 8.5px 0
            animation-delay: 1s
            animation-name: ignite-saber
            animation-duration: 1s
            animation-fill-mode: forwards
        .saber
            width: 0px
            height: 17px
            position: absolute
            top: 4px
            left: 150px
            box-shadow: -10px 0 80px red
            border-radius: 0 8.5px 8.5px 0
            animation-delay: 1s
            animation-name: ignite-saber
            animation-duration: 1s
            animation-fill-mode: forwards

    @keyframes ignite-saber
        0%
            width: 0px
        100%
            width: 500px
</style>
