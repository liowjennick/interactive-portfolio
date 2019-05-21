<template lang="pug">
  v-app
    .page-container
      .side-navbar-container
        .side-navbar
          .name-title-container
            h1 LIOW JEN NICK
            p Web Developer
          .navigation-container
            .navigation-bar
              ul
                router-link(to="/" exact)
                  li
                    v-icon home
                    span HOME
                router-link(to="/portfolio")
                  li
                    v-icon list
                    span PROJECTS
                router-link(to="/home")
                  li
                    v-icon keyboard
                    span SKILLS
                router-link(to="/home")
                  li
                    v-icon face
                    span CONTACT
            .navigation-description
              h2 {{ sideBarTitle }}
              p {{ sideBarDescription }}
      .page-content
        router-view
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

  watch: {
    $route(to, from, next) {
      this.changeCopyBasedOnCurrentRoute()

      next
    }
  },

  mounted () {
    this.changeCopyBasedOnCurrentRoute()
  },

  data () {
    return {
      sideBarTitle: 'Index',
      sideBarDescription: 'Description'
    }
  },

  methods: {
    changeCopyBasedOnCurrentRoute () {
      console.log(this.$route)
      if (this.$route.path === '/') {
        this.sideBarTitle = 'Introduction'
        this.sideBarDescription = 'Some Introduction here'
      }

      if (this.$route.path === '/interactive') {
        this.sideBarTitle = 'Interactive'
        this.sideBarDescription = 'Hello interactive'
      }

      if (this.$route.path === '/portfolio') {
        this.sideBarTitle = 'Description'
        this.sideBarDescription = 'Description page.'
      }
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC')
  @import url('https://fonts.googleapis.com/css?family=Abel')
  $light-red: #FFEBEE
  $red: #B71C1C
  $black: #212121
  $light-grey: #E0E0E0
  $grey: #616161
  $white: white
  $primary-ff: 'Amatic SC', cursive
  $secondary-ff : 'Abel', sans-serif

  .page-container
    display: flex
    font-family: $secondary-ff
    min-height: 100vh
    overflow: hidden
    .side-navbar-container
      flex: 1 0 30%
      background-color: $white
      height: 100%
      .side-navbar
        .name-title-container
          padding: 20px 20px 25px 20px
          h1
            background-color: $red
            color: $white
            padding: 5px 10px
            display: inline-block
            font-size: 20px
          p
            font-weight: 900
    .navigation-container
      flex: 1 0 70%
      display: flex
      .navigation-bar
        flex: 1 0 20%
        ul
          list-style: none
          padding: 0
          a
            display: block
            text-decoration: none
            color: $black
            border-right: 1px solid $light-grey
            transition: 0.25s background-color
            &:hover
              background-color: $light-red
            &.router-link-active
              border-right: 1px solid $red
              color: $red
              i
                color: $red
          li
            text-align: center
            padding: 10px 0
            i
              display: block
              font-size: 40px
            span
              dipslay: block
      .navigation-description
        flex: 1 0 80%
        padding: 0 20px
        h2
          font-size: 45px
          color: $black
        p
          color: $grey
    .page-content
      flex: 1 0 70%
      height: 100%
      padding: 20px
      background-color: $black
      font-family: $secondary-ff
</style>
