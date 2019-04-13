<template lang="pug">
    #interactive-player(:style="{ transform: position }")
        #chat-bubble(:style="{ transform: chatPosition }")
            p {{ chatText }}
</template>

<script>
export default {
    name: 'Player',
    data () {
      return {
          chatText: 'Greetings, I am Nick',
          keyState: null,
          climbing: false,
          playerDirection: '1', // 1 = right, -1 = left
          x: 20,
          y: 250
      }
    },

    computed: {
        position () {
            return `translate(${this.x}px, ${this.y}px) scaleX(${this.playerDirection})`
        },

        chatPosition () {
            return `translateY(-85px) scaleX(${this.playerDirection})`
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
                    this.climbUp()
                }

                // right arrow
                if (this.keyState === 39) {
                    console.log('right')
                    this.moveRight()
                }

                // down arrow
                if (this.keyState === 40) {
                    console.log('down')
                    this.climbDown()
                }

                if (window['interactive-player'].style.animationName === 'move' && !this.keyState) {
                    window['interactive-player'].style.animationName = 'standing'
                }

                if (window['interactive-player'].style.animationName === 'climb' && !this.keyState) {
                    console.log('here')
                    window['interactive-player'].style.animationName = 'climbIdle'
                }
            }

            console.log(this.x, this.y)
            setTimeout(() => {
                this.pageLoop()
            }, 100)
        },

        moveLeft () {
            if (!this.climbing) {
                // check edge
                if (this.x === 20) {
                    this.x = 20
                    window['interactive-player'].style.animationName = 'standing'
                } else {
                    this.x -= 20
                    window['interactive-player'].style.animationName = 'move'
                }

                this.playerDirection = '-1'
            }
        },

        moveRight () {
            if (!this.climbing) {
                // check edge
                if (this.x === 1240) {
                    this.x = 1240
                    window['interactive-player'].style.animationName = 'standing'
                } else {
                    this.x += 20
                    window['interactive-player'].style.animationName = 'move'
                }
                this.playerDirection = '1'
            }
        },

        climbUp () {
            if ((this.x >= 1200 && this.x <= 1240) && (this.y <= 250 && this.y >= -120)) {
                if (this.y <= -110) { // fix this later
                    window['interactive-player'].style.animationName = 'standing'
                    this.y = -120
                    this.climbing = false
                    console.log('here')
                } else {
                    this.y -= 20
                    window['interactive-player'].style.animationName = 'climb'
                    this.climbing = true
                    console.log('bug')
                }
            }
        },

        climbDown () {
            if ((this.x >= 1200 && this.x <= 1240) && (this.y <= 250 && this.y >= -120)) {
                if (this.y >= 240) {
                    this.y = 250
                    this.climbing = false
                    window['interactive-player'].style.animationName = 'standing'
                } else {
                    this.y += 20
                    window['interactive-player'].style.animationName = 'climb'
                    this.climbing = true
                }
            }
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
    
    #chat-bubble
        background-color: white
        padding: 5px
        border: 6px solid black
        border-radius: 20px
        width: 200%
        font-weight: 900
        font-size: 20px

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

    @keyframes climbIdle
        0%
            background-image: url("../assets/interactive/player/9_climbing/frame1.png")
        100%
            background-image: url("../assets/interactive/player/9_climbing/frame1.png")

    @keyframes climb
        0%
            background-image: url("../assets/interactive/player/9_climbing/frame1.png")
        20%
            background-image: url("../assets/interactive/player/9_climbing/frame2.png")
        40%
            background-image: url("../assets/interactive/player/9_climbing/frame3.png")
        60%
            background-image: url("../assets/interactive/player/9_climbing/frame4.png")
        80%
            background-image: url("../assets/interactive/player/9_climbing/frame5.png")
        100%
            background-image: url("../assets/interactive/player/9_climbing/frame6.png")
</style>
