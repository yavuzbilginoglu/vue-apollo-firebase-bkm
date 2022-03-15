<template>
  <div class="home">
    <Searchbar />
    <div id="top">
      <img src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/343_1347_20211130164020917.jpg">
    </div>
    <div>
      <router-link to="/logout">
      çıkış yap
      </router-link>
    </div>
    <div class="offer">
      <Offer />
    </div>
    <div id="mid">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-alana-1-bedava-9-90-tl-blok.jpg">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-kitap-alana-1-bedava-14-90-tl-blok.jpg" alt="">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-alana-1-bedava-19-90-tl-blok.jpg" alt="">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-milyon-kitap-5-tl-blok.jpg" alt="">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-alana-1-bedava-19-90-tl-blok.jpg" alt="">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-kitap-alana-1-bedava-14-90-tl-blok.jpg" alt="">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-alana-1-bedava-9-90-tl-blok.jpg">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-alana-1-bedava-19-90-tl-blok.jpg" alt="">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/1-milyon-kitap-5-tl-blok.jpg" alt="">
    </div>
    <div class="slider-book">
      <Slidingbook />
    </div>
    <div class="slider-book">
      <Slidingbook />
    </div>
    <div class="slider-book">
      <Slidingbook />
    </div>
    <div>
      <p> <b>Kitap :</b>okumak benim tutkum diyorsanız, aradığınız her kitabı bkmkitap.com'da ve mağazalarımızda bulabilirsiniz. Farklı türlerde yüzbinlerce kitapla birlikte en çok satanlar listesinde yer alanlar ve yeni çıkan kitapların hepsi burada. Siz sadece ne okumak istediğinize karar verin!</p>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Searchbar from '@/components/Searchbar.vue'
// import SlidingOffer from '@/components/SlidingOffer.vue'
import Offer from '@/components/Offer.vue'
import Slidingbook from '@/components/Slidingbook.vue'
import Footer from '@/components/Footer1.vue'

export default {
  name: 'Home',
  components: {
    Searchbar,
    Offer,
    Slidingbook,
    Footer
  }
}
</script>
<style scoped>
#mid{
  width: 1500px;
  margin-left: 145px;
  margin-top: 10px;
}
#mid img{
  padding: 10px;
}
#mid img:hover{
  padding: 10px;
  box-shadow: 0px 5px 10px 0px;
}
#top{
  margin-top: 20px;
  margin-left: 155px;
}
.offer{
  margin-left: -205px;
}
.slider-book{
  margin-top: -100px;
  margin-left: -200px;
  padding-bottom: 370px;
}
p{
  /* margin-left: 150px; */
  padding-left: 150px;
  margin-right: 150px;
  text-align: left;
}
#footer{
  margin-top: 150px;
}
</style>