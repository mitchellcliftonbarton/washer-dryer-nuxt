<template>
  <div class="flex flex-wrap lg:flex-nowrap items-start mb-20">
    <nuxt-link :to="`/exhibitions/${exhibition.slug}`" class="order-2 lg:order-1 w-full lg:w-1/4 lg:hover:underline">
      <h2>"{{ exhibition.title }}"</h2>

      <div v-if="exhibition.artists.length > 3">
        <p>Various artists</p>
      </div>
      <div v-else>
        <p v-for="(artist, idx) in exhibition.artists" :key="idx">{{ artist.name }}</p>
      </div>

      <p>{{ exhibition.startDate }} - {{ exhibition.endDate }}</p>
    </nuxt-link>

    <div class="order-1 lg:order-2 images w-full lg:w-3/4 mb-6 lg:mb-0">
      <div class="inner relative bg-grey-lighter">
        <div class="absolute top-0 left-0 w-full h-full">
          <img :src="require(`../src/images/${exhibition.poster}`)" alt="" class="object-cover object-center w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionListItem',
  props: {
    exhibition: Object
  }
}
</script>

<style lang="scss" scoped>
  .images {
    .inner {
      padding-bottom: 65%;
    }
  }
</style>