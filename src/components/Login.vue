<template>
<div>
  <div id="top" v-if="!this.$store.state.user">
      <div id="left-asside">
        <div class="subdiv">
          <ul>
            <li><img class="picexp" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico.png"></li>
            <li><h4>ÜYE GİRİŞİ</h4></li>
            <li><img class="picexp" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico1.png"></li>
          </ul>
        </div>
        <br><br><br><br><br>
        <form id="form1" name="kayit" action="kayit.php" target="_blank" method="Get"
            autocomplete="on">
               <table id="login">
                    <tr>
                        <td class="input"> 
                          <input type="email" @blur="$v.email.$touch()" 
                          :class="{'is-invalid' : $v.email.$error}" v-model="$v.email.$model" 
                          placeholder="E-mail" name="email" id="idemail" requiredsize="30"/></td>
                          <!-- <input type="email" required placeholder="E-Mail" 
                            name="email" id="idemail" requiredsize="30">-->
                    </tr>
                    <tr>
                        <td class="input">
                          <input type="password" @blur="$v.password.$touch()" 
                          :class="{'is-invalid' : $v.password.$error}" 
                          v-model="$v.password.$model" placeholder="Password" 
                          size="30" maxlength="30"/>
                        </td>
                          <!-- <input type="text" name="adsoyad" id="idadsoyad"
                            size="30" maxlength="30" required placeholder="Ad Soyad"> -->
                    </tr>
                    <tr>
                      <td><button @click="login" id="loginButton">Giriş Yap</button></td>
                        <!-- <td><input id="loginButton" type="submit" value="Giriş Yap"></td> -->
                        <td><input id="reset" type="reset" value="Şifremi unuttum"></td>
                    </tr>
                </table>
        </form>
        <div id="social">
           <img id="imgface" src="https://cdn.bkmkitap.com//Data/EditorFiles/Social_Media/facebookYeni.png">
           <p>Facebook ile giriş</p>
           <img id="imgtwt" src="https://cdn.bkmkitap.com//Data/EditorFiles/Social_Media/twitterYeni.png">
           <p>Twitter ile giriş</p>
        </div>

      </div>
      <div id="right-asside">
        <div class="subdiv">
          <ul>
            <li><img class="picexp" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico.png"></li>
            <li id="li2"><h4>NEDEN BKMKİTAP</h4></li>
            <li><img class="picexp" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico1.png"></li>
          </ul>
        </div>
        <br><br><br><br><br><br>
        <p>
            BKM Kitabevi, kitabevi sektöründe 37 yılı aşkın süredir faaliyet gösteren,
             kendine özgü müşteri memnuniyeti yaklaşımıyla yayıncı ile okuyucu arasında köprü
             olmayı sürdüren ve bundan mutluluk duyan bir kitabevi markasıdır. BKM Kitabevi,
              halihazırda 5.000 metrekarelik mağazasıyla 400.000 den fazla çeşit, 1.000.000
              dan fazla kitap stoğuyla Avrupa'nın ve Türkiye’nin en büyük fiziksel kitap
              mağazası olma ayrıcalığını sürdürmekte ve kitapseverlerin hoşça vakit
              geçirmelerini sağlayacak kafeterya ve restoran alanlarıyla müşteri memnuniyetini
              temel alan hizmetlerini sürdürmektedir.<br><br>
            BKM Kitabevi, ülkemizde çeyrek asır önce başlayan yolculuğu sonrası
             “web üzerinden en iyi kitap satışı deneyimi sunmak” adına internet üzerinden
             satışlara başlamış ve “Türkiye’nin lider kitabevi olma” vizyonunu
             gerçekleştirmeye dönük önemli bir adım daha atmıştır. bkmkitapcom adlı
             internet mağazası ile amacımız “vakit nakittir” deyişinden hareketle
             müşterilerimizin fiziksel alışveriş için mağazamıza erişim konusundaki
             zaman kaybını önlemek, %100 güvenilir bir alışveriş ortamı yaratmak ve siz
             üşterilerimizi en uygun fiyatlarla buluşturmaktır. Sanal mağazamızda zengin
              koleksiyonumuzdan istediğiniz her kategoride kitabı bulabilir, ayrıca yeni
              çıkan tüm kitaplara en hızlı şekilde ulaşabilirsiniz.<br><br>
            Okumanın mutluluk kaynağı olduğuna inanıyor ve çeyrek asırdır bu inancımızı
             sürdürerek müşterilerimize en uygun fiyatla en kaliteli yayınları sağlamanın
              gururunu yaşıyoruz.Sorunlarınızla ilgili destek almak için sitemiz üzerinden
              7/24 bizlerle iletişime geçebilirsiniz.Bizi tercih ettiğiniz için teşekkür eder,
               keyifli okumalar dileriz.
        </p>
      </div>
  </div>
  <div v-else>
    <h4>Hesabım</h4>    
    <div>
      <router-link to="/logout">
      çıkış yap
      </router-link>
    </div>
  </div>
</div>
</template>
<script>
import firebase from 'firebase'
import { mapActions, mapGetters } from 'vuex'
// import router from '@/router'
import axios from 'axios'
import {required, email, minLength, maxLength} from "vuelidate/lib/validators"
export default {
  name: 'Login',
  data(){
    return{
        email: "",
        password: "",
        user: null
    }
  },
  validations: {
    email: {
        required,
        email
    },
    password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(28)
    }
  },
  methods:{
    ...mapActions(['setError']),
    login(){
        if(this.$v.$invalid){
            if(this.$v.email.$invalid){ this.setError({time:3000, error:"Plase control the email field"}) }
            if(this.$v.password.$invalid){
                console.log(this.$v.password.minLength)
                console.log(this.$v.password.maxLength)
                if(!this.$v.password.minLength){this.setError({time:3000, error:`Password must be at least ${this.$v.password.$params.minLength.min} characters.`})}
                else if(!this.$v.password.maxLength){this.setError({time:3000, error:`Password must be maximum ${this.$v.password.$params.maxLength.max} characters.`})}
                else{this.setError({error:"Plase control the password field"})}
            }
        }
        else{
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then( () => {
                    axios.put(this.getApiUrl + 'stats/signIn')
                        // .then(() => router.push("/profile"))
                        .catch(error => this.setError({error}) )
                })
                //.catch( error => { this.setError({error:error.message}) }) // let errorCode = error.code;
        }
    }
  },
  computed:{
      ...mapGetters(["getApiUrl"])
  },
  created(){
    const user = firebase.auth().currentUser;
        if(user){
            this.user = user
        }
  },
  watch:{
      user: function(oldVal, newVal){
          if(!oldVal && newVal){
            // router.push("/profile")
          }
      }
  }
}
</script>
<style>
#top{
  margin-top: -100px;
}
#social{
  margin-left: 210px;
}
.picexp{
  margin-top: 30px;
}
/* #form1 #login{} */
#right-asside #subdiv ul{
  margin-right: 200px;
}
#right-asside #subdiv ul li{
  width: 100px;
  float: left;
}
.subdiv #li3{
  margin-right: 250px;
}
.subdiv #li2{
  margin-top: 20px;
}
#right-asside .subdiv{
  border: none;
  margin-left: 200px;
  width: 500px;
}
#form1 #login tr td{
  width: 600px;
  padding: 10px;
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
#loginButton{
    background-color: #e4002b;
    border-color: #e4002b;
    border-radius: 3px;
    color: antiquewhite;
    width: 150px;
    height: auto;
    float: left;
}#reset{
    background-color: transparent;
    border: transparent;
    margin-left: -300px;
    float : left;
    color: #e4002b;
}
#imgface{
    margin-top: 7px;
    float: left;
    width: 25px;
    height: 25px;
}
#imgtwt{
    float: left;
    width: 25px;
    height: 25px;
}
#right-asside p{
    font-size: 16x;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    margin-top: -50px;
    color: rgb(95, 102, 109);
    margin-left: 230px;
    text-indent: 20px;
    position: relative;
    width: 630px;
}
#right-asside #picexp{
    float: right;
}
input{
    width: 200px;
    height: 40px;
    padding: 15px;
    border-width: 1px;
}
table {
    padding-top: 10px;
}
#left-asside{
    width: 500px;
    float: right;
    margin: 10px;
    padding: 10px;
    margin-left: 0px;
    background: transparent;
    border-color: transparent;
    /*left: 20%;*/
}
#left-asside .subdiv h4{
  margin-top: 20px;
}
#right-asside{
    width: 700px;
    float: right;
}
input{
    width: 380px;
    height: 40px;
}
/*
#pageContent{
    width:60%;
    min-height: 700px;
    margin: 10px;
    padding: 10px;
    float: left;
    position: relative;
    left: 4%;
    background: url("pictures/background.png");
    background-repeat: repeat-y;
    background-position: center;
}*/
</style>
