<template lang="pug">
    #introduction-section
        .introduction-content
            .fade
            .text-crawl
                h1 LIOW JEN NICK
                h2 WEB DEVELOPER
                br
                p It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
                br
                p It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
                br
                p It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
                br
</template>

<script>
import Overlay from './Overlay'

export default {
    name: 'Portfolio',
    components: { Overlay },
    data () {
      return {
      }
    }
}
</script>

<style lang="sass" scoped>
=tablet
  @media screen and (max-width: 749px)
    @content

=mobile
  @media screen and (max-width: 500px)
    @content

$black: #212121

#introduction-section
    overflow: hidden
    height: 100%
    position: relative
    .fade
        background-image: linear-gradient(0deg, transparent, $black 50%)
        display: block
        position: absolute
        top: 0
        height: 150px
        width: 100%
        z-index: 100
    .introduction-content
        perspective: 400px
        text-align: center
        height: 100%
        width: 80%
        display: block
        margin: 0 auto
        .text-crawl
            color: #feda4a
            font-family: 'Pathway Gothic One', sans-serif
            font-weight: 900
            line-height: 1.5
            height: 100%
            animation-name: crawl
            animation-duration: 30s
            animation-timing-function: linear
            animation-iteration-count: infinite
            h1
                font-size: 1.5em
            h2
                font-size: 3em
            p
                font-size: 1.8em

@keyframes crawl
    0%
        top: 100%
        transform: rotateX(30deg) translateY(100%) translateZ(0)
    100%
        top: -100%
        transform: rotateX(30deg) translateY(-100%) translateZ(0px)
</style>
