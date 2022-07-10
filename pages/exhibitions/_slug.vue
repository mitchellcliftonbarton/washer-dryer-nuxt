<template>
  <div class="def-padding">
    <p class="w-1/2 mx-auto text-center uppercase mb-32 mt-32 lg:mt-0">
      <nuxt-link to="/exhibitions">← Back to Exhibitions</nuxt-link>
    </p>

    <div class="mx-auto w-full lg:w-1/2 text-center mb-32">
      <h1 class="mb-6">"{{ exhibition.title }}"</h1>

      <div>
        <span v-for="(artist, index) in exhibition.artists" :key="index">
          <a :href="artist.link" class="lg:hover:underline" target="_blank" rel="noreferrer">{{ artist.name }}</a><span
            v-if="index + 1 !== exhibition.artists.length">,&nbsp;</span>
        </span>
      </div>
      <p>{{ exhibition.startDate}} - {{ exhibition.endDate }}</p>
    </div>

    <div 
      class="flex flex-wrap lg:flex-nowrap" 
      :class="exhibition.text ? 'justify-start' : 'justify-center'"
    >
      <div 
        v-if="exhibition.text" 
        class="w-full lg:w-1/4 lg:pr-20 rich-text mb-20 lg:mb-0"
        v-html="exhibition.text"
      ></div>
      <div class="w-full lg:w-1/2">
        <div 
          v-for="(image, index) in allImages" 
          :key="index" 
          class="mb-20"
        >
          <img :src="require(`../../src/images/${image.path}`)" alt="" class="mb-4">
          <p v-if="image.title">"{{ image.title }}"</p>
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
    exhibition() { // the object for the exhibition found by slug
      return this.exhibitions.find(exhibition => exhibition.slug === this.$route.params.slug)
    },
    allImages() {
      const images = this.exhibition.pieces.reduce((allImages, currentPiece) => { // 'allImages' is accumulator, 'currentPiece' is current iteration
        currentPiece.img.forEach(image => { // loop through images in current piece iteration
          if (!allImages.some(existingImage => existingImage === image)) { // only push image to accumulator if doesnt exist
            // create an object with image date
            const obj = {
              ...image,
              title: currentPiece.title
            }

            allImages.push(obj)
          }
        })

        return allImages
      }, [])

      return images
    }
  }
}
</script>
