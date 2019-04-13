<template lang="pug">
    #portfolio-section
        .portfolio-list
            .portfolio-item(v-for="portfolio in portfolios")
                v-card
                    v-img(:src="portfolio.image")
                    v-card-title(primary-title)
                        div
                            h3.headline.mb-0 {{ portfolio.title }}
                            div {{ portfolio.description }}
                    v-card-actions
                        router-link(:to="portfolio.shareLink")
                            v-btn(flat color="orange") Share
                        v-btn(flat color="orange") Explore
</template>

<script>
export default {
    name: 'Portfolio',
    data () {
      return {
          portfolios: [
              {
                image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
                title: 'Some title here',
                description: 'Some descriptive text is inserted here. So go wild.',
                shareLink: '/portfolio/kfc',
                exploreLink: 'www.google.com/explore'
              },
              {
                image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
                title: 'Some title here',
                description: 'Some descriptive text is inserted here. So go wild.',
                shareLink: '/portfolio/mcd',
                exploreLink: 'www.google.com/explore'
              },
              {
                image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
                title: 'Some title here. Some title here. Some title here. Some title here',
                description: 'Some descriptive text is inserted here. So go wild. ome descriptive text is inserted here. So go wild. ome descriptive text is inserted here. So go wild.',
                shareLink: 'www.google.com',
                exploreLink: 'www.google.com/explore'
              },
              {
                image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
                title: 'Some title here',
                description: 'Some descriptive text is inserted here. So go wild.',
                shareLink: 'www.google.com',
                exploreLink: 'www.google.com/explore'
              },
              {
                image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
                title: 'Some title here',
                description: 'Some descriptive text is inserted here. So go wild.',
                shareLink: 'www.google.com',
                exploreLink: 'www.google.com/explore'
              }
          ]
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

#portfolio-section
    .portfolio-list
        display: flex
        flex-wrap: wrap
        .portfolio-item
            flex: 0 0 33%
            padding: 10px
            +tablet
                flex: 0 0 50%
            +mobile
                flex: 0 0 100%
        .v-card
            height: 100%
            padding-bottom: 50px
        .v-card__actions
            position: absolute
            bottom: 0
        a
            text-decoration: none
</style>
