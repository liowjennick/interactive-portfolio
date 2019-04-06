<template lang="pug">
    #interactive-player(:style="{ transform: position }")
</template>

<script>
export default {
    name: 'Player',
    data () {
      return {
          keyState: null,
          playerDirection: '1', // 1 = right, -1 = left
          x: 0,
          y: 250
      }
    },

    computed: {
        position () {
            return `translate(${this.x}px, ${this.y}px) scaleX(${this.playerDirection})`
        }
    },

    created () {
        window.addEventListener('keydown', (e) => {
            e.preventDefault()
            this.keyState = e.keyCode || e.which
        })

        window.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.keyState = null
        })

        this.pageLoop()
    },

    methods: {
        pageLoop () {
            if (window['interactive-player']) {
                // left arrow
                if (this.keyState === 37) {
                    console.log('left')
                    this.moveLeft()
                }

                // up arrow
                if (this.keyState === 38) {
                    console.log('up')
                }

                // right arrow
                if (this.keyState === 39) {
                    console.log('right')
                    this.moveRight()
                }

                // down arrow
                if (this.keyState === 40) {
                    console.log('down')
                }

                if (window['interactive-player'].style.animationName === 'move' && !this.keyState) {
                    window['interactive-player'].style.animationName = 'standing'
                }
            }

            setTimeout(() => {
                this.pageLoop()
            }, 100)
        },

        moveLeft () {
            this.x -= 20
            this.playerDirection = '-1'
            window['interactive-player'].style.animationName = 'move'
        },

        moveRight () {
            this.x += 20
            this.playerDirection = '1'
            window['interactive-player'].style.animationName = 'move'
        }
    }
}
</script>

<style lang="sass">
    #interactive-player
        background-size: 100% 100%
        width: 150px
        height: 200px
        position: absolute
        bottom: 315px
        left: 0px
        transition: 0.1s all
        animation-name: standing
        animation-duration: 0.2s
        animation-timing-function: linear
        animation-iteration-count: infinite
        animation-fill-mode: forward

    @keyframes move
        0%
            background-image: url("../assets/interactive/player/2_run/frame1.png")
        33%
            background-image: url("../assets/interactive/player/2_run/frame2.png")
        66%
            background-image: url("../assets/interactive/player/2_run/frame3.png")
        100%
            background-image: url("../assets/interactive/player/2_run/frame4.png")

    @keyframes standing
        0%
            background-image: url("../assets/interactive/player/1_stand/frame1.png")
        20%
            background-image: url("../assets/interactive/player/1_stand/frame2.png")
        40%
            background-image: url("../assets/interactive/player/1_stand/frame3.png")
        60%
            background-image: url("../assets/interactive/player/1_stand/frame4.png")
        80%
            background-image: url("../assets/interactive/player/1_stand/frame5.png")
        100%
            background-image: url("../assets/interactive/player/1_stand/frame6.png")
</style>
