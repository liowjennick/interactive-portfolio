<template lang="pug">
    #portfolio-item-section(v-if="this.selectedPortfolio")
        p {{ selectedPortfolio.title }}
        p {{ selectedPortfolio.description }}
</template>

<script>
import data from '../json/portfolio-item.json'

export default {
    name: 'PortfolioItem',
    mounted () {
        this.getSelectedPortfolio()
    },
    data () {
        return {
            portfolios: data,
            selectedPortfolio: null
        }
    },
    methods: {
        getSelectedPortfolio () {
            this.portfolios.map(item => {
                if (this.$route.params.item === item.title) {
                    this.selectedPortfolio = item
                    console.log(item)
                }
            })

            if (!this.selectedPortfolio) {
                this.$router.push('/portfolio')
            }
        }
    }
}
</script>

<style lang="sass">
</style>