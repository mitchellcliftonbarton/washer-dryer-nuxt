<template>
  <div class="def-padding">
    <h1 class="text-center w-1/2 mx-auto uppercase mb-32 mt-32 lg:mt-0">Exhibitions: {{ filterOptions[filterState] }}</h1>

    <div class="flex justify-center mb-32 lg:mb-16">
      <button v-for="(option, index) in filterOptions" :key="index" class="uppercase mx-4"
        :class="{ 'text-blue': filterState === index }" @click="filterState = index">{{ option }}</button>
    </div>

    <div class="hidden lg:flex justify-center mb-32">
      <button v-for="(option, index) in gridOptions" :key="index" class="uppercase mx-4"
        :class="{ 'text-blue': gridState === index }" @click="gridState = index">{{ option }}</button>
    </div>

    <div v-if="filteredExhibitions.length > 0" class="flex justify-center">
      <div v-if="gridOptions[gridState] === 'list'" class="w-full lg:w-2/3">
        <ExhibitionListItem 
          v-for="(exhibition, index) in filteredExhibitions" 
          :key="index" 
          :exhibition="exhibition"
        />
      </div>

      <div v-else-if="gridOptions[gridState] === 'grid'" class="w-full lg:w-3/4 flex flex-wrap">
        <ExhibitionGridItem 
          v-for="(exhibition, index) in filteredExhibitions" 
          :key="index" 
          :exhibition="exhibition"
        />
      </div>
    </div>

    <div v-else class="flex justify-center">
      <p>No results.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ExhibitionListItem from '~/components/ExhibitionListItem.vue'
import ExhibitionGridItem from '~/components/ExhibitionGridItem.vue'

export default {
  components: { ExhibitionListItem, ExhibitionGridItem },
  data() {
    return {
      filterState: 0,
      filterOptions: [
        'all',
        'upcoming',
        'past'
      ],
      gridState: 0,
      gridOptions: [
        'list',
        'grid'
      ]
    }
  },
  computed: {
    ...mapState({
      exhibitions: state => state.siteData.exhibitions
    }),
    filteredExhibitions() {
      const exhibitions = [...this.exhibitions] // copy vuex state, vuex will get mad if you dont do this
      let filteredExhibitions

      // filter upcoming
      if (this.filterOptions[this.filterState] === 'upcoming') {
        filteredExhibitions = exhibitions.filter(item => {
          const now = new Date()

          return new Date(item.startDate) > now
        })
      }

      // filter past
      if (this.filterOptions[this.filterState] === 'past') {
        filteredExhibitions =  exhibitions.filter(item => {
          const now = new Date()

          return new Date(item.endDate) < now
        })
      }

      // filter all
      if (this.filterOptions[this.filterState] === 'all') {
        filteredExhibitions = exhibitions
      }

      // return value
      return filteredExhibitions.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    }
  }
}
</script>
