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
      content: 'Strona główna Maszota - Proffesional Car Spraying',
    },
    {
      vmid: 'google',
      name: 'google',
      content: 'nositelinkssearchbox',
    },
    {
      vmid: 'googlebot',
      name: 'googlebot',
      content: 'all',
    },
    {
      vmid: 'og:title',
      name: 'og:title',
      property: 'og:title',
      content: 'Maszota - Proffesional Car Spraying',
    },
    {
      vmid: 'og:type',
      name: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      vmid: 'og:image',
      name: 'og:image',
      property: 'og:image',
      content: 'https://imgur.com/CXLc57n.png',
    },
    ]
  },
  components: {
    Hero,
    Marketing,
    Partners,
  }
}
</script>
