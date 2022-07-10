<template>
  <div class="w-1/3 px-4 mb-16">
    <div class="images w-full mb-4">
      <div class="inner relative bg-grey-lighter">
        <div class="absolute top-0 left-0 w-full h-full">
          <img :src="require(`../src/images/${exhibition.poster}`)" alt=""
            class="object-cover object-center w-full h-full" />
        </div>
      </div>
    </div>

    <nuxt-link :to="`/exhibitions/${exhibition.slug}`" class="lg:hover:underline">
      <h2>"{{ exhibition.title }}"</h2>

      <div v-if="exhibition.artists.length > 3">
        <p>Various artists</p>
      </div>
      <div v-else>
        <p v-for="(artist, idx) in exhibition.artists" :key="idx">{{ artist.name }}</p>
      </div>

      <p>{{ exhibition.startDate }} - {{ exhibition.endDate }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionGridItem',
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