<template>
  <div class="def-padding">
    <h1 class="text-center w-1/2 mx-auto uppercase mb-60 mt-32 lg:mt-0">Contributors</h1>

    <div class="flex justify-center">
      <div class="four-columns w-full lg:w-1/2">
        <div 
          v-for="(contributor, index) in allContributors" 
          :key="index"
        >
          <a 
            v-if="contributor.link" 
            :href="contributor.link"
            target="_blank"
            rel="noreferrer"
            class="underline lg:hover:text-blue"
          >{{ contributor.name }}</a>
          <p v-else>{{ contributor.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      exhibitions: state => state.siteData.exhibitions
    }),
    allContributors() {
      const exhibitions = [...this.exhibitions] // make a copy of vuex state

      const contributors = exhibitions.reduce((all, exhibition) => { // 'all' is accumulator, 'exhibition' is current iteration
        exhibition.artists.forEach(artist => { // loop through artists in current exhibition iteration
          if (!all.some(existingArtist => existingArtist.name === artist.name)) { // only push artist to accumulator if doesnt exist
            all.push(artist)
          }
        })

        return all
      }, [])

      return contributors.sort((a, b) => a.name.localeCompare(b.name)) // sort contributors alphabetically
      // read more about localeCompare at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    }
  }
}
</script>

<style lang="scss" scoped>
  .four-columns {
    column-count: 2;

    @media screen and (min-width: theme("screens.lg")) {
      column-count: 4;
    }
  }
</style>
