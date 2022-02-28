<template>
  <body id="full">
      <div id="left-asside">
          <div id="left-asside-in">
            <img src="https://cdn.bkmkitap.com/anna-karenina-ciltli-8730720-30-O.jpg">
          </div>
      </div>
      <div id="div-midd">
        <div>
          <h2>Anna Karenina</h2>
          <p>İş Bankası Kültür Yayınları</p>
          <p id="author">Lev Nikolayeviç Tolstoy</p>
          <img class="pic" src="https://www.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/urundetay/firat/user_27082019/starFill.png">
            <img class="pic" src="https://www.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/urundetay/firat/user_27082019/starFill.png">
            <img class="pic" src="https://www.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/urundetay/firat/user_27082019/starFill.png">
            <img class="pic" src="https://www.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/urundetay/firat/user_27082019/starFill.png">
            <img class="pic" src="https://www.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/urundetay/firat/user_27082019/starFill.png">
            <p>Yorum Ekle</p>
        </div>
        <div class="centerBlock">
          <div>Anna Karenina Hakkında Bilgiler<hr/></div>
          <div>
            <div>
              <span>Türü:</span>
              <span>Rus Edebiyatı</span>
            </div>
            <div>
              <span>Sayfa Sayısı:</span>
              <span>1062</span>
            </div>
            <div>
              <span>ISBN:</span>
              <span>9786053604099</span>
            </div>
            <div>
              <span>Kapak:</span>
              <span>Ciltsiz</span>
            </div>
          </div>
        </div>
      </div>
      <div id="right-asside">
        <div>
          <p>19,00 TL</p>
          <button>SEPETE EKLE</button>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div id="div-author">
          <img src="https://cdn.bkmkitap.com/Data/Modeller/7711.jpg" alt="Lev Nikolayeviç Tolstoy">
          <div id="div-who-wrote">
            <p>Lev Nikolayeviç Tolstoy</p>
          </div>
            <button id="btn-goto-author">Yazar Profili</button>
            <button id="btn-goto-information">Daha fazla Bilgi</button>
        </div>
      </div>
  </body>
</template>
<style>
#full{
  margin-top: 2%;
}
ul{
    list-style-type: none;
    font-size: 20px;
    position: relative;
    top: 10px;
    left: 17%;
    font-stretch: semi-expanded;
}
ul li{
    float: left;
    margin-left: 35px;
}
p{
    text-indent: 20px;
}

.check{
    width: 10px;
    height: 10px;
}
#left-asside{
    width: 30%px;
    float: left;
    padding: 5px;
    position: relative;
    left: 10%;
    border: solid;
    border-color: #efefef;
    background-color: #efefef;
}
#left-asside-in{
    padding: 40px;
    border: solid;
    border-width: 1px;
    border-color: rgb(194, 205, 216);
    background-color: #efefef;
}
#div-midd{
    width: 40%;
    min-height: 700px;
    padding: 10px;
    float: left;
    position: relative;
    left: 12%;
    /* background: url(""); */
    background-position: center;
}
#div-midd-in{
    border: solid;
    border-width: 1px;
    border-color: rgb(240, 240, 240);
    background-color: rgb(240, 240, 240);
}
#div-midd p{
    margin-left: -20px;
    color: rgb(155, 155, 155);
}
#div-midd #author{
    font-size: 25px;
    color: rgb(199, 17, 17);
}
.pic{
    width: 20px;
    height: 20px;
}
.centerBlock {
    background: #efefef;
    margin-top: 47px;
    margin-right: 20px;
    width: calc(50% - 20px);
    padding: 10px;
}
#right-asside{
    width: 25%;
    padding: 10px;
    padding-right: 5%;
    float: left;
}
#right-asside div {
    border: solid;
    border-width: 1px;
    padding: 10px;
}
#right-asside div p{
    font-size: 25px;
    color: rgb(199, 17, 17);
}
#right-asside div button{
    background-color: rgb(199, 17, 17);
    color: white;
    padding:15px;
    margin-left: 200px;
}
#right-asside #div-author{
    border-color: rgb(199, 17, 17);
    z-index: -1;
    height: 120px;
    border-width: 5px;
}
#right-asside #div-author #div-who-wrote p{
    color: white;
    font: 10px;
  padding-left: 50px;
   background-color: rgb(199, 17, 17);
  border-color: rgb(199, 17, 17);
  margin-top: -10px;
  margin-right: -11px;
  height: 30px;
}
#div-author #btn-goto-author{
  background-color: transparent;
  float: left;
  font-size: 10px;
  color: #2c2c2c;
  border-width: 0px;
  margin-left: 110px;
  margin-top: 20px;
}
#div-author #btn-goto-information{
  float: left;
  background-color: thistle;
  font-size: 10px;
  color: #000000;
  border-radius: 5px;
  background-color: #a7a7a7c5;
  margin-top: -35px;
}
#right-asside #div-author #div-who-wrote{
  border: none;
  margin-top: -10px;
  margin-right: -11px;
}
#div-author img{
  border-radius: 50%;
  width: 120px;
  height: auto;
  border: solid;
  border-width: 3px;
  border-color: rgb(199, 17, 17);
  position: absolute;
  margin-top: -40px;
  margin-left: -50px;
}
</style>
