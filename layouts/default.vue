<template>
  <div class="default-layout">
    <MainNav />

    <main role="main">
      <Nuxt />
    </main>

    <MainFooter />
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'

export default {
  components: { MainNav, MainFooter }
}
</script>