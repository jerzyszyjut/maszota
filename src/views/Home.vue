<template>
  <div class="home">
    <NavBar/>
    <Hero/>
    <Marketing/>
    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Partners from '../components/Partners.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Marketing from '../components/Marketing.vue'
import Hero from '../components/Hero.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Hero,
    Marketing,
    Partners,
    Footer,
  }
}
</script>
