<template>
<div>
  <div>
    <div>
      <div id="divpromotion">
        <img id="imgpromotion" src="https://cdn.bkmkitap.com/Data/EditorFiles/yeni-yil-kargo-bedava-header-banner.jpg">
      </div>
        <header id="banner">
            <nav>
                <ul>
                    <router-link to = "/">
                    <li id="li-logo"><a><img id="imglogo" src="https://cdn.bkmkitap.com/Data/EditorFiles/logonew23.png"></a></li>
                    </router-link>
                    <li id="li-bell"><a href=""> <img id="imgbell" src="https://cdn.bkmkitap.com/Data/EditorFiles/bell_icon.png"></a></li>
                    <router-link to="/">
                    <li id="li-menu"><a href=""><img src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/ust/firat/v4/menu.png">MENU</a></li>
                    </router-link>
                    <li id="li-search"><input type="text" name="search" id="input-search" size="30" maxlength="30"
                       required placeholder="Aradığınız ürünün adını yazınız"></li>
                    <li class= "li" id ="li-bttn-search"><a id = "btn-search"><img src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/ust/firat/v4/search.png">ARA</a></li>
                    <router-link to="/registerview">
                    <li class="li" id="li-register" v-if="!this.$store.state.user">
                      <a href=""> <img src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/ust/firat/v4/login.png">ÜYE OL</a></li>
                    </router-link>
                    <router-link to="/loginview"> 
                    <li class="li" id="li-login" v-if="!this.$store.state.user">
                      <a href=""><img src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/ust/firat/v4/login.png">GİRİŞ YAP</a></li>
                    </router-link>
                    <li v-if="this.$store.state.user" class="li user kargo"> <a>KARGOM NEREDE? </a></li>
                    <router-link to="/userr">
                    <li v-if="this.$store.state.user" class="li user"><a>PROFİL</a></li>
                    </router-link>
                    <li class="li" id="li-help"><a href=""><img id="help" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/ust/firat/v4/yardim.svg">YARDIM</a></li>
                    <router-link to="/basketview">
                    <li class="li" id="li-basket"><a href=""><img src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/ust/firat/v4/cart.png">SEPET</a></li>
                    </router-link>
                    <!-- <router-link to="/forget" exact><i class="fas fa-unlock-alt"></i>Forget Password?</router-link> -->
                </ul>
            </nav>
        </header>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Header',
    data(){
        return{
            user: null,
            userDisplayName: []
        }
    },
    methods: {
        ...mapActions(['isItUser']),
        ...mapGetters(['getUser']),
        link: function (event) {
            event.preventDefault()
            window.open(event.target.parentElement.href)
        }
    },
    created(){
        this.isItUser()
            .then(response => {
                this.user = response
                // console.log(response)
                let userDisplayName
                userDisplayName = (this.user.displayName && this.user.displayName!=undefined) ? this.user.displayName : this.user.email
                if(userDisplayName!=undefined){this.userDisplayName.push("Welcome back " + userDisplayName)}
            })
    },
    computed:{
    }
}
</script>

<style scoped>
#help{
  width: 15px;
  height: auto;
}
#imgpromotion{
    width: 102%;
    margin-left: -1%;
    margin-top: -0.6%;
}
#banner{
    border-style: solid;
    margin-top: -1%;
    height: 92px;
    margin-left: -27px;
    margin-right: -1%;
    border-color: #d5d5d5;
    border-width: 1px;
    background-color: rgb(243, 243, 243);

    padding-top: 23px;
}
#banner a{
    text-decoration: none;
}
.user a{
    text-decoration: none;
    font-size: 13px;
}
.kargo{
  margin-left: 15px;
  margin-right: -20px;
  width: 155px;
  font-size: 9px;
  padding: 0px;
}
#banner ul .li,#banner ul #li-search, #li-bttn-search{
    text-decoration: none;
    padding: 10px;
    color: rgb(184, 182, 182);
    border: solid;
    border: 2px solid #e8e8e8;
    background-color: white;
    height: 50px;
}
#banner nav ul {
  margin-left: -292px;
  margin-top: -19px;
}
ul #li-bell{
  background-color: rgb(243, 243, 243);
  margin-left: 80px;
}
ul #li-menu{
    padding: 10px;
    border-width: 2px;
    font-size: 15px;
    text-decoration: none;
    border: solid;
    border-width: 2px;
    border: 2px solid #e8e8e8;
    background-color: white;
    font-family: 'hinted-subset-AvenirNextLTPro-Regular';
    width: 88px;
    margin-left: 15px;
    height: 50px;
    width: 120px;
}
#li-menu img{
  font-family: 'Trebuchet MS, sans-serif';
  color: black;
}
#imgbell{
    width: 26px;
    height: auto;
    margin-top: 10px;
    margin-left: 55px;
}
#imglogo{
    width: 190px;
    height: 71px;
    margin-top: 6px;
}
#li-logo{
    margin-right: 22px; 
}
#li-bttn-search{
  margin-left: -3px;
  width: 85px;
}
#li-bttn-search a{
  color: rgb(59, 57, 57);
  font-size: 16px;
  margin-top: 0px;
}
#li-bttn-search img{
  margin-left: 35px;
}
ul{
    list-style-type: none;
    font-size: 20px;
    position: relative;
    top: -10px;
    font-stretch: semi-expanded;
    background-color: rgb(243, 243, 243);
}
#li-search{
    width: 26.7%;
    border-style: none;
    margin-left: 11px;
}
#li-help{
  width: 90px;
    margin-left: 19px;
  font-size: 9px;
}
#li-register{
  width: 105px;
    margin-left: 19px;
  font-size: 13px;
}
#li-login{
    margin-left: 19px;
  font-size: 12px;
  width: 105px;
}
#li-basket{
  font-size: 15px;
    margin-left: 19px;
  width: 90px;
}
#input-search{
    width: 100%;
    height: 10px;
    margin-top: -6px;
    border-color: white;
    box-shadow: 0px 0px 0px 0px;
}
#btn-search{
  width: 90px;
  height: 50px;
  margin-top: -10px;
  float: right;
  background-color: transparent;
  border-color: white;
  box-shadow: none;
}
ul li{
    float: left;
    /* margin-left: 10px; */
    width: 5%;
    height: 30px;
    font-family: "hinted-subset-AvenirNextLTPro-Bold";
    font-weight: 600;
}
#li-search, #li-bell, #li-menu, .li, #li-bttn-search{
  margin-top: 15px;
  border-radius: 3px;
}
#li-search, #li-menu, .li, #li-bttn-ara{
    /* padding-top: 15px; */
  border: 2px solid #e8e8e8;
}
.li a{
  color: #e30613;
}
p{
    text-indent: 25px;
}
</style>