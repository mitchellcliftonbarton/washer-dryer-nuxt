<template>
  <header class="fixed top-0 left-0 def-padding flex justify-between w-full pointer-events-none">
    <div class="pointer-events-auto">
      <nuxt-link class="uppercase block" to="/">Washer / Dryer<br>Projects</nuxt-link>
      <!-- <p>Salt Lake City, UT</p> -->
    </div>

    <nav class="pointer-events-auto">
      <ul>
        <li>
          <nuxt-link to="/exhibitions">Exhibitions</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link to="/editions">Shop</nuxt-link>
        </li> -->
        <li>
          <nuxt-link to="/info">Info</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contributors">Contributors</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link to="/donate-support">Donate/Support</nuxt-link>
        </li> -->
        <!-- <li>
          <nuxt-link to="/Journal">Journal</nuxt-link>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style lang="scss" scoped>
  header {
    nav a {
      &.nuxt-link-active {
        color: theme('colors.blue');
      }
    }
  }
</style>