<template>
  <div class="basketview">
    <div>
        <Searchbar />
    </div>
    <div id="top">
      <img src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/343_1347_20211201165859320.jpg" alt="">
    </div>
    <div id="top-info">
      <ul>
        <li><img src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/home.png" alt=""></li>
        <li><p id="p1">Anasayfa /</p></li>
        <li><p id="p2">Edebiyat Kitapları / </p></li>
        <li><p id="p3">Roman</p></li>
      </ul>
    </div>
    <hr id="hr1">
    <div id="info">
        <BookInformation />
    </div>
    <hr id="hr2">
    <div id="bottom-book">
      <Slidingbook />
    </div>
    <div id="alt-bar">
      <div id="urun"><p>Ürün Özellikleri</p></div>
      <div id="odeme"><p>Ödeme Seçenekleri<p/></div>
    </div>
    <div id="aciklama">
      <p><b>
        Martin Eden Kısa Özet<br><br>
Jack London’ın, kendi hayatından izler taşıyan romanı Martin Eden, denizci bir gencin kişiliğinden 
ödün vermeden sınıf atlama çabalarını anlatıyor. Zengin bir ailenin kızına âşık olan Martin Eden, ona erişebilmek
 uğruna kendini ilme ve ünlü bir yazar olma hayaline adıyor; bu hayal uğruna takıntılı denilebilecek bir şekilde 
 varını yoğunu ortaya koyuyor.
<br>
Edebiyat tarihinin kuşkusuz en özgün karakterlerinden biri olan Martin Eden, azmi ve zekâsıyla yalnızca 
işçi sınıfını değil, dahil olmaya çalıştığı burjuva dünyasını da aşıyor. Böylece maskelerin ardında yatanı görüyor, 
toplumun gerçek yüzünü idrak ediyor. Neticede her iki sınıfa da ait olamamanın yorgunluğu, yazarlık serüveninde çektiği fiziksel 
ve ruhsal zorluklara eklenince Martin, derin bir yalnızlığa sürükleniyor. Başarı sürecinin haşinliğinin sonunda başarının
 tatminsizliğiyle karşı karşıya kalıyor. Jack London’ın başyapıtı olan bu trajik roman, okurlarını tıpkı Martin’in hayatı 
 gibi dalgalı bir yolculuğa çıkarıyor.</b>
      </p>
    </div>
    <div id="comment">
      <Comments />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import BookInformation from '@/components/BookInformation.vue'
//import Footer from '../components/Footer1.vue'
import Searchbar from '@/components/Searchbar.vue'
import Comments from '@/components/Comments.vue'
import Slidingbook from '@/components/Slidingbook.vue'

export default {
  name: 'Home',
  components: {
    BookInformation,
    Searchbar,
    Comments,
    Slidingbook
  }
}
</script>

<style scoped>
#top{
  margin-top: 20px;
  margin-left: 160px;
}
#top-info{
  margin-top: -20px;
  margin-left: -205px;
}
#top-info ul li p{
  float: left;
  font-size: 14px;
  width: 170px;
  margin-top: 0px;
  margin-left: -110px;
  color: #4a4a4a;
}
#info{
    margin-top: 350px;
    margin-left: 140px;
}
#alt-bar{
  margin-top: 270px;
  margin-left: 160px;
}
#urun{
  border-width: 1px;
  border: solid;
  border-color: #ff2e00;
  background: #ff2e00;
  font-size: 25px;
  color: #ffffff;
  width: 600px;
  height: 40px;
  border-radius: 5px;
  float: left;
}
#odeme{
  border: solid;
  border-width: 1px;
  border-color: #e4002b;;
  color: #ffffff;
  background: #e4002b;
  font-size: 25px;
  width: 600px;
  height: 43px;
  border-radius: 5px;
  float: left;
}
#odeme p, #urun p{
  margin-bottom: 25px;
  margin-left: 170px;
}
#aciklama{
  position: relative;
  top: 50px;
  margin: 125px;
  margin-left: 155px;
  margin-top: 175px;
  font-size: 20px;
  color: #2b2a2a;
}
#hr1{
  color: #f3ebeb;
  margin-top: 62px;
  width: 1200px;
}
#hr2{
  position: relative;
  width: 1200px;
}
#hr3{
  position: relative;
  width: 1200px;
  margin-top: 270px;
}
#bottom-book{
  position: relative;
  left: -150px;
  top: -100px;
}
#comment{
  width: 1400px;
}
</style>