<template>
  <div class="home">
    <Hero/>
    <Services/>
    <Marketing/>
    <Partners/>
  </div>
</template>

<script>
import Partners from '../components/Partners.vue'
import Marketing from '../components/Marketing.vue'
import Hero from '../components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Marketing,
    Partners,
  }
}
</script>
