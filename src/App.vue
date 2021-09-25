<template>
  <div id="app">
    <v-app>
      <NavBar/>
      <div v-if="!(this.$router.currentRoute.name == 'Home')" class="stripe"></div>
      <router-view/>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  },
  mounted() {
    console.log(this.$router.currentRoute)
  }
}
</script>
