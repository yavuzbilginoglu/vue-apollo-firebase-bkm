<template>
  <body id="top" v-if="!this.$store.state.user">
      <div id="left-asside">
        <div id="subdiv">
          <ul>
            <li><img id="picexp" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico.png"></li>
            <li><h4>ÜYE OL</h4></li>
            <li><img id="picexp" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico1.png"></li>
          </ul>
        </div>
        <br><br><br><br><br>
        <template v-if="user==null">
        <form class="form1" name="kayit" target="_blank" method="Get"
            autocomplete="on">
              <table class="register">
                <tr class="row">
                    <td class="input">
                      <input type="text" v-model="displayName" name="name" id="idName"
                        size="30" maxlength="30" required placeholder="Ad"/>
                    </td>
                      <!-- <input type="text" name="name" id="idName"
                        size="30" maxlength="30" required placeholder="Ad"> -->
                </tr>
                <tr class="row">
                    <td class="input">
                      <input type="text" v-model="displaySurname" name="surname" id="idSurname"
                        size="30" maxlength="30" required placeholder="Soyad"/>
                    </td>
                      <!-- <input type="text" name="surname" id="idSurname"
                        size="30" maxlength="30" required placeholder="Soyad"> -->
                </tr>
                <tr class="row" id="age">
                  <td>
                    <ul>
                      <li id="liselectDay"><select id="selectDay" name="day">
                        <option selected>Gün</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        </select>
                      </li>
                      <li id="liselectMonth"><select id="selectMonth" name="month">
                          <option selected>Ay</option>
                          <option>Ocak</option>
                          <option>Şubat </option>
                          <option>Mart </option>
                          <option>Nisan </option>
                          <option>Mayıs </option>
                          <option>Haziran </option>
                          <option>Temmuz </option>
                          <option>Ağustos </option>
                          <option>Eylül</option>
                          <option>EKim</option>
                          <option>Kasım</option>
                          <option>Aralık</option>
                      </select>
                      </li>
                      <li id="liYear"><input type="number" required placeholder="Yıl"
                        name="year" id="year" requiredsize="4"></li>
                    </ul>
                  </td>
                </tr>
                <tr class="row">
                  <td>
                      <select id="selectGender" name="gender">
                          <option selected>Cinsiyetinizi giriniz...</option>
                          <option>Kadın</option>
                          <option>Erkek</option>
                      </select>
                  </td>
                </tr>
                <tr class="row">
                   <td class="input"> <!--<img id="imgTurkBayragi" src="pictures/turk.png"><p id="pPhoneNum">Cep Telefonu</p> -->
                    <input id="inputPhoneNum" type="number" name="phoneNember"
                      size="30" required requiredplaceholder=""></td>
                </tr>
                <tr class="row">
                  <td class="input">
                  <input type="email" name="email" id="idemail" requiredsize="30"
                  @blur="$v.email.$touch()" :class="{'is-invalid' : $v.email.$error}"
                  v-model="$v.email.$model" placeholder="E-mail" /></td>
                    <!-- <input type="email" required placeholder="E-Mail"
                      name="email" id="idemail" requiredsize="30"> -->
                </tr>
                <tr class="row">
                  <td class="input"> 
                    <input type="password" @blur="$v.password.$touch()" 
                    :class="{'is-invalid' : $v.password.$error}" 
                    v-model="$v.password.$model" placeholder="Şifre" 
                    name="password" id="idemail" requiredsize="30"/></td>
                    <!-- <input type="password" required placeholder="Şifre"
                      name="password" id="idemail" requiredsize="30"> -->
                </tr>
                <tr class="row">
                  <td class="input">
                     <input type="password" required placeholder="Şifre Tekrar"
                      name="passwordAgain" id="idemail" requiredsize="30">
                    </td>
                   
                </tr>
                <tr class="row">
                  <td colspan="2"><input class="check" type="checkbox">
                      Kampanyalardan haberdar olmak için <a class="a-orange">elektronik almak</a> istiyorum .</td>
                </tr>
                <tr class="row">
                  <td colspan="2"><input class="check" type="checkbox">
                    <a class="a-orange">KVKK Aydınlatma Metnini</a> Okudum, Kabul Ediyorum.</td>
                </tr>
                <router-link to="/loginview">
                <tr class="row">
                  <td>
                    <button @click="register" id="RegisterButton">Kaydet</button>
                    <!-- <input id="RegisterButton" type="submit" value="Kaydet"> -->
                    </td>
                </tr>
                </router-link>
              </table>
        </form>
        </template>
        <div v-else class="text-center">
            <!-- asd@asd.com -->
            <p>Your user has been successfully created.</p>
            <p>Now, you logged automatically.</p>
            <router-link to="/profile" class="btn btn-3 mt-5">Go to Profile</router-link>
        </div>
      </div>
      <div id="right-asside">
        <img id="pic" src="https://www.bkmkitap.com/Data/EditorFiles/bkmkitap/memberFormBg.png">
      </div>
  </body>
</template>
<style scoped>
#top{
  margin-top: -100px;
}
.a-orange{
  color: #ef7f06;
}
#subdiv ul li{
  margin-top: 40px;
  width: 80px;
}
#subdiv ul li h4{
  margin-top: 0px;
  font-weight: bold;
}
.form1{
  margin-left: 150px;
}
.form1 .register .row td{
  padding: 10px;
}
.form1 .register .row td input{
  padding: 7px;
  border-radius: 4px;
  color: #a7a7a7;
}
.picexp{
  margin-top: 60px;
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
#age{
  margin-bottom: 10px;
}
#liselectDay{
    margin-top: -45px;
    padding-bottom: 15px ;
    margin-left: -98px;
}
#liselectMonth{
    margin-top: -45px;
    margin-left: 2px;
    padding-bottom: 15px ;
}
#selectMonth,#selectDay{
    height: 59px;
    width: 100px;
}
#liYear{
    margin-top: -31px;
    margin-left: 128px;
    margin-top: -45px;
}
#year{
    width: 175px;
    margin-left: -25px;
}
#selectGender{
    padding: 15px;
    width: 280px;
}
#inputPhoneNum{
    padding-top: 10px;
}
/*
#pPhoneNum{
    position: absolute;
    top: 330px;
    left: 20px;
}
#imgTurkBayragi{
    position: absolute;
    top: 350px;
    left: 17px;
    width: 10px;
    height: 5px;
}*/
#RegisterButton{
    background-color: #ef7f06;
    width: 400px;
    color: white;
    border-color: #ef7f06;
    height: 50px;
    border-radius: 3px;
    font-size: 19px;
}
#reset{
    background-color: transparent;
    border: transparent;
}
p{
    margin-top: 13px;
}
#right-asside p{
    font-size: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    color: lightslategrey;
}
.check{
    width: 10px;
    height: 10px;
}
input{
    width: 380px;
    height: 40px;
}

#selectGender{
  width: 400px;
  height: 60px;
}
table {
    padding-top: 10px;
}
#left-asside{
    width: 40%;
    float: left;
    margin: -10px 10px 10px 10px;
    margin-left: -20px;
    padding: 10px;
    position: relative;
    background: transparent;
    border-color: transparent;
    /*left: 20%;*/
}
#right-asside{
    width: 50%;
    margin-left: 30px;
    margin-top: 120px;
    padding: 10px;
    padding-right: 5%;
    float: right;
}
#right-asside img{
    width: 90%;
    margin-left: 140px;
    height: auto;
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
<script>
import { mapActions, mapGetters } from 'vuex'
import firebase from 'firebase'
import {required, email, minLength, maxLength} from "vuelidate/lib/validators"
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return{
        email: "",
        displayName: "",
        displaySurname: "",
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
    ...mapActions(['setError', 'setIsSuccess']),
    register(){
        if(this.$v.$invalid){
            if(this.$v.email.$invalid){ this.setError({error:"Plase control the email field"}) }
            else if(this.$v.password.$invalid){
                if(!this.$v.password.minLength){this.setError({error:`Password must be at least ${this.$v.password.$params.minLength.min} characters.`})}
                else if(!this.$v.password.maxLength){this.setError({error:`Password must be maximum ${this.$v.password.$params.maxLength.max} characters.`})}
                else{this.setError({error:"Plase control the password field"})}
            }
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    createdUser => {
                        this.user =  createdUser
                        let user = firebase.auth().currentUser
                        let getApiUrl = this.getApiUrl
                        user.updateProfile({displayName: this.displayName})
                            .then( () => {
                                axios.put(getApiUrl + 'stats/signUp')
                                    .then(() => this.setIsSuccess({message:"Your account was successfully created!"})  )
                                    .catch(error => this.setError({error}) )

                                axios.put(this.getApiUrl + 'stats/signIn')
                                    .catch(error => this.setError({error}) )
                            })
                            .catch( error => this.setError({error}) )
                    },
                    err => {
                        this.setError({error:err.message})
                    }
                )
                .catch()
        }
    }
  },
  computed:{
    ...mapGetters(['getError','getApiUrl']),
  },
  created(){
  }
}
</script>