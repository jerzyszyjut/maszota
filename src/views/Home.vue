<template>
  <div class="home">
    <NavBar/>
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

export default {
  name: 'Home',
  components: {
    NavBar,
    Partners,
    Footer,
    Marketing,
  }
}
</script>
