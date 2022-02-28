<template>
  <body id="top">
      <div>
          <div id="state">
              <a href="">
                  <div id="basket">
                    <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="">
                    <p>SEPET</p>
                  </div>
              </a>
              <a href="">
                <div id="address">
                  <img src="https://cdn-icons-png.flaticon.com/512/854/854980.png" alt="">
                    <p>ADRES</p>
                </div>
              </a>
              <a href="">
                <div id="paying">
                  <img src="https://cdn-icons-png.flaticon.com/128/1087/1087117.png" alt="">
                    <p>ÖDEME</p>
                </div>
              </a>
              <a href="">
                <div id="confrim">
                  <img src="https://cdn-icons-png.flaticon.com/128/271/271205.png" alt="">
                    <p>ONAY</p>
                </div>
              </a>
          </div>
          <br><br><br><br><br><br><br>
          <div>
            <ul>
              <li><div class="line" id="line1"></div></li>
              <li><div class="line" id="line2"></div></li>
              <li><div class="line" id="line3"></div></li>
              <li><div class="line" id="line4"></div></li>
            </ul>
          </div>
            <div class="information-box">
              <ul>
                <li class="p-font-size" id="li-product">Ürün</li>
                <li class="p-font-size" id="li-product-name">Ürün Adı</li>
                <li class="p-font-size" id="li-amount">Miktar</li>
                <li class="p-font-size" id="li-cost">Toplam Tutar</li>
                <li class="p-font-size" id="li-del">Sil</li>
              </ul>
            </div>
            <div id="salebox">
                  <input type="text" placeholder="Kupon/Hediye Kartı Kodunuz" value="">
                  <button>Uygula</button>
            </div>
          <br>
            <div>
              <ul id="book-info">
                <li id="li-img"><img id="img-book" src="https://cdn.bkmkitap.com/martin-eden-371557-9168898-37-K.jpg" alt=""></li>
                <li id="li-author"><p class="p-font-size">Martin Eden</p><br><p class="p-font-small color-red">CAN YAYINLARI</p>
                <hr></li>
                <li id="li-button">
                  <ul class="ul-up-down">
                    <li><button id="down-button"> - </button></li>
                    <li class="p-font-size"><p>1</p></li>
                    <li><button id="up-button">+</button></li>
                  </ul>
                </li>
                <li id="li-price"><div id="div-price"><p id="p1">25 TL</p> <p id="p2">41%</p> <p id="p3">12,50 TL</p></div></li>
                <li id="li-remove" class="p-font-size"><p>kaldır  x</p></li>
              </ul>
            </div>
            <div id="div-basket">
              <p>Sepet Toplamı</p>
              <p id="bp2">12,50TL</p>
            </div>
            <br>
            <br>
            <br>
            <div id="div-total">
              <p id="p1">Genel Toplam</p>
              <p id="tp2">12,50TL</p>
            </div>
            <br>
            <div id="shopping-info">
              <p>Sepetinizde değişiklik yaptıysanız<b> güncellemeyi unutmayın.</b> Ödeme ve  onay sayfasına kadar satın alma işleminizi <b>iptal edebilirsiniz.</b></p>
            </div>
            <div>
              
              <button id="bttn-goto-payying"><a v-if="this.$store.state.user">ÖDEMEYE GİT</a>
                <router-link to="/loginview" v-else><a>ÖDEMEYE GİT</a></router-link></button>
              
            <button id="bttn-refresh"><p>Sepeti Güncelle</p></button>
            </div>
            <div>
              <ul id="state-info">
                <li id="li1"><button>Alışverişe Devam</button></li>
                <li id="li2"><button>Sepetimi Temizle</button></li>
                <router-link to="/loginview" v-if="!this.$store.state.user">
                <li id="li3"><button>Alışveriş Listeme Ekle</button></li>
                </router-link>
              </ul>
            </div>
      </div>
  </body>
</template>
<style>
#top{
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 130px;
}
#state{
    margin-left: 110px;
}
#address, #paying, #confrim{
    border: solid;
    background-color: white;
    border-color: #f2f2f2;
    border-radius: 45px;
    color: #4a4a4a;
    float: left;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    width: 270px;
    height: 60px;
    margin: 10px;
    border-width: 2px;
}
#basket{
  border: solid;
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    border-radius: 45px;
    color: #4a4a4a;
    float: left;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    width: 270px;
    height: 60px;
    border-width: 2px;
    margin: 10px;
}
#state a div img{
  width: 30px;
  float: left;
  height: 30px;
  border-radius: 50%;
  border: solid;
  padding: 15px;
  margin-top: -1px;
  margin-left: -1px;
  border-color: #f2f2f2;
}
.line{
  width: 300px;
  border-bottom: 4px solid rgb(242, 242, 242);
  margin-top: -60px;
}
#line1{
  border-color: #e4002b;
  margin-left: -180px;
}
#line2{
  margin-left: 20px;
}
#line3{
  margin-left: 210px;
}
#line4{
  margin-left: 400px;
}
#li-product{
  margin-left: -445px;
}
#li-product-name{
  width: 90px;
  margin-left: -285px;
}
#li-amount{
  margin-left: 70px;
}
#li-cost{
  margin-left: 120px;
  width: 100px;
}
#li-del{
  margin-left: 60px;
}
.information-box{
  border: solid;
  border-color: #e2e2e2;
  border-width: 1px;
  width: 900px;
  padding-bottom: 10px;
  margin-left: 135px;
}
.p-font-size{
  font-size: 13px;
}
.p-font-small {
  font-size: 10px;
}
.information-box ul li{
  position: relative;
  margin-top: -20px;
  float: left;
  color: #4a4a4a;
}
.information-box ul{
  margin-left: 0px;
}
#state-info{
  border: solid;
  border-color: #e2e2e2;
  background-color: transparent;
  border-width: 1px;
  width: 860px;
  height: 20px;
  padding-bottom: 10px;
  margin-left: -90px;
}
#state-info li button{
  height: 30px;
  background-color: transparent;
  border-width: 1px;
  border-color: #e2e2e2;
}
#state-info li {
  width: 160px;
  margin-top: -55px;
  float: left;
  color: #e2e2e2;
}
#state-info #li1{
  margin-left: -40px;
}
#state-info #li2{
  margin-left: 78px;
}
#state-info #li3{
  margin-left: 192px;
}
#salebox{
  margin-top: -30px;
}
#salebox input{
  height: 7px;
  width: 170px;
  margin-top: -3px;
  margin-left: 180px;
}
#salebox button{
  background-color: transparent;
  height: 39px;
  border-width: 1px;
}
#book-info{
  margin-left: -250px;
}
#li-img{
  margin-left: 120px;
}
#img-book{
  width: 115px;
}
#li-author{
  margin-top: 0px;
  margin-left: 60px;
  width: 200px;
}
#li-button{
  margin-left: 170px;
 float: left;
}
.ul-up-down li #down-button {
  margin-left: -25px;
  background-color: transparent;
  border-width: 1px;
}
.ul-up-down li p{
  margin-top: -25px;
  margin-left: -19px;
}
.ul-up-down li #up-button{
  margin-left: 30px;
  margin-top: -50px;
  margin-top: -80px;
  background-color: transparent;
  border-width: 1px;
}
.ul-up-down{
  float: left;
  margin-top: 10px;
  width: 20px;
  margin-left: -90px;
  background-color: white;
}
#li-price{
  float: left;
  margin-left: 70px;
  margin-top: 50px;
}
#div-price{
  margin-top: -50px;
}
#div-price p{
  float:left;
}
#div-price #p1{
  font-size: 14px;
  color: #4a4a4a;
  float: left;
}#div-price #p2{
  font-size: 14px;
  color: #e4002b;
  margin-left: 50px;
  margin-top: -30px;
}
#div-price #p3{
  background-color: #e4002b;
  border-color: #e4002b;
  border-radius: 5px;
  color: antiquewhite;
  line-height: 13px;
  width: 130px;
  height: auto;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
#li-remove{
  margin-top: 40px;
  margin-left: 70px;
  margin-right: 30px;
  color: #4a4a4a;
}
#div-basket, #div-total{
  border: solid;
  border-width: 1px;
  width: 250px;
  margin-left: 1055px;
  height: 40px;
  border-color: #e2e2e2;
}
#div-total{
  margin-top: -55px;
}
#bp2{
  margin-left: 50px;
}
#tp2{
  margin-left: 50px;
  color: #e4002b;
}
#div-basket p, #div-total p{
  float: left;
}
#bttn-goto-payying{
  background-color: #e4002b;
  border-color: #e4002b;
  border-radius: 3px;
  color: antiquewhite;
  width: 250px;
  padding-top: 20px;
  padding-bottom: 20px;
  float: left;
  margin-left: 1071px;
}
#bttn-refresh{
  border-color: #e4002b;
  background: transparent;
  border-width: 1px;
  border-radius: 3px;
  color: #e4002b;
  width: 250px;
  height: 40px;
  margin-top: 10px;
  float: right;
  margin-right: 17px;
}
#shopping-info p{
  margin-left: 1062px;
  color: #4a4a4a;
  width: 300px;
  font-family: 'Comic Sans MS, Comic Sans, cursive';
}
.color-red{
  color: #e4002b;
}
.li-margin{
  margin-top: 70px;
}
ul{
  list-style-type: none;
}
hr{
  color: #dbdbdb;
}
</style>
