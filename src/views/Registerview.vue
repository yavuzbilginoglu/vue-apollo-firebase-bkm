<template>
  <div class="registerview">
    <Searchbar />
    <Register />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'
import Searchbar from '../components/Searchbar.vue'
//import Footer from '../components/Footer1.vue'

export default {
  name: 'Home',
  components: {
    Register,
    Searchbar
  }
}
</script>
