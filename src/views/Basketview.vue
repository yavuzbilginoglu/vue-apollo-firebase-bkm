<template>
  <div class="basketview">
    <div>
      <Searchbar />
    </div>
    <div id="mid">
      <Basket />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
#footer{
  margin-top: 300px;
}
</style>

<script>
// @ is an alias to /src
import Basket from '@/components/Basket.vue'
import Footer from '../components/Footer1.vue'
import Searchbar from '@/components/Searchbar.vue'

export default {
  name: 'Home',
  components: {
    Basket,
    Searchbar,
    Footer
  }
}
</script>
