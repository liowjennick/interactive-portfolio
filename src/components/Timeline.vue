<template lang="pug">
    #timeline-section
        v-timeline
            v-timeline-item(v-for="timeline in timelineItems" color="red lighten-2")
                template(v-slot:opposite)
                    span {{ timeline.tag }}
                v-card.elevation-2
                    v-card-title.headline {{ timeline.title }}
                    v-card-text {{ timeline.description }}
</template>

<script>
export default {
    name: 'Timeline',
    data () {
      return {
          timelineItems: [
              {
                tag: 'Some tag here',
                title: 'Some title here',
                description: 'Description goes here'
              },
              {
                tag: 'Some tag here',
                title: 'Some title here',
                description: 'Description goes here'
              },
              {
                tag: 'Some tag here',
                title: 'Some title here',
                description: 'Description goes here'
              }
          ]
      }
    }
}
</script>

<style lang="sass" scoped>
</style>