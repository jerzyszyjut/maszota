<template>
  <div id="app">
    <v-app>
      <NavBar/>
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
  }
}
</script>
