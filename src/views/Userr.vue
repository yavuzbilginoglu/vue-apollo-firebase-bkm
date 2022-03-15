<template>
  <div>
    <div>
        <div>
          <Searchbar />
        </div>
        <Hesap />
    </div><!-- mainbox -->

  </div>
</template>

<script>
// @ is an alias to /src
import Searchbar from '@/components/Searchbar.vue'
// import SlidingOffer from '@/components/SlidingOffer.vue'
import Hesap from '@/components/Hesap.vue'

export default {
  name: 'Home',
  components: {
    Searchbar,
    Hesap}
}
</script>