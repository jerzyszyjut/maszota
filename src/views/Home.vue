<template>
  <div class="home">
    <NavBar/>
    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Partners from '../components/Partners.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Partners,
    Footer,
  }
}
</script>
