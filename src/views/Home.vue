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
  metaInfo: {
    title: 'Maszota - Strona główna',
    meta: [{
      vmid: 'description',
      name: 'description',
      content: 'Maszota - Proffesional Car Spraying',
    }]
  },
  components: {
    Hero,
    Marketing,
    Partners,
  }
}
</script>
