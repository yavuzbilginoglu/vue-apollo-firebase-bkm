<template>
  <div class="loginview">
    <Searchbar />
    <Login />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Searchbar from '../components/Searchbar.vue'
//import Footer from '@/components/Footer1.vue'


export default {
  name: 'Home',
  components: {
    Login,
    Searchbar
  }
}
</script>
