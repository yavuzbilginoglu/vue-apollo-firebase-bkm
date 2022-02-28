<template>
<div>
<div class="top-asside">
        <div id="subdiv">
            <ul>
                <li><img id="picexp1" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico.png"></li>
                <li id="li2">
                    <h4>ÇOK SATAN KİTAPLAR</h4>
                </li>
                <li><img id="picexp" src="https://cdn.bkmkitap.com/theme/v4-bkmkitap-yeni/sub_theme/vitrin/firat/v4/titleico1.png"></li>
            </ul>
        </div>
    </div>
    <br><br><br>
    <div id="books">
      <router-link to="/bookView">
      <div class="card" v-for="book in users" :key="book.id">
        <div class="book-info">
            <img :src="book.image" alt="kitap">
            <h1 id="kitapismi">{{book.name}}</h1>
            <a href="/yazar" class="yazar">{{book.author}}</a>
            <br>
            <a href="/yayinevi">{{book.publisher}}</a>
            <br><br>
            <a class="add-basket"><button class="price"> <p>{{book.price}}₺</p> </button></a>
        </div>
      </div>
      </router-link>
      <!-- <div class="card">
        <div class="book-info">
            <img src="https://cdn.bkmkitap.com/karamazov-kardesler-142772-8828402-14-B.jpg" alt="kitap">
            <h1 id="kitapismi">Sefiller 2 Cilt Takım</h1>
            <a href="/yazar" class="yazar">Victor Hugo</a>
            <br>
            <a href="/yayinevi">İş Bankası Kültür Yayınları</a>
            <br><br>
            <a class="add-basket"><button class="price"> <p>27.00₺</p> </button></a>
        </div>
      </div> -->
      <!-- <Bookview pic='https://cdn.bkmkitap.com/yildizlarin-laneti-ciltli-8977253-57-K.jpg' bookName='Yıldızların Laneti Ciltli' author='Sena Nur Işık' publisher='İndigo Kitap' price='19.99₺'/>
      <Bookview pic='https://cdn.bkmkitap.com/karamazov-kardesler-142772-8828402-14-B.jpg' bookName='Sefiller 2 Cilt Takım' author='Victor Hugo' publisher='İş Bankası Kültür Yayınları' price='27,00'/>
      <Bookview pic='https://cdn.bkmkitap.com/sefiller-2-cilt-takim-152098-8741888-15-B.jpg' bookName='Karamazov Kardeşler' author='Dostoyevski' publisher='İş Bankası Kültür Yayınları' price='16,00'/>
      <Bookview pic='https://cdn.bkmkitap.com/toprak-ana-8632305-82-B.jpg' bookName='Toprak Ana' author='Cengiz Aytmatov' publisher='Ötüken Neşriyat' price='6,60'/> -->
    
    </div>
  </div>
</template>

<script>

export default {
  name: 'slidingBook.vue',
  data () {
    return {
    }
  },
  computed: {
    gettersusers() {
    return this.$store.getters.allUsers
    },
    users() {
    return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch("getUsers");
  }
}

// export default {
//   name: 'HelloWorld',
//   data(){
//       return {
//         mock_books:[
//          {
//            id:1,
//             image:'https://cdn.bkmkitap.com/yildizlarin-laneti-ciltli-8977253-57-K.jpg',
//             name:'Yıldızların Laneti Ciltli',
//             author:'Sena Nur Işık',
//             publisher:'İndigo Kitap',
//             price:19.99,
//          },

//          {
//             id:2,
//             image:'https://cdn.bkmkitap.com/karamazov-kardesler-142772-8828402-14-B.jpg',
//             name:'Sefiller 2 Cilt Takım',
//             author:'Victor Hugo',
//             publisher:'İş Bankası Kültür Yayınları',
//             price:27.00, 
//          },

//          {
//             id:3, 
//             image:'https://cdn.bkmkitap.com/sefiller-2-cilt-takim-152098-8741888-15-B.jpg',
//             name:'Karamazov Kardeşler',
//             author:'Dostoyevski',
//             publisher:'İş Bankası Kültür Yayınları',
//             price:16.00, 
//          },

//          {
//             id:4,
//             image:'https://cdn.bkmkitap.com/toprak-ana-8632305-82-B.jpg',
//             name:'Toprak Ana',
//             author:'Cengiz Aytmatov',
//             publisher:'Ötüken Neşriyat',
//             price:6.60, 
//          }
//         ],
//         books:[] //bos bir books dizisi tanimliyorum ki, yukarida bu nesne kullanilacak, ama bu diziyi simdi dolduracagiz
//       }
//   },
//   methods:{
//     async getBooks(){
//       this.books = await this.$store.dispatch('getBooks');
//       // this.books dedigim, 101 numarali satirdaki books nesnesidir.
//       // this.$store.dispatch ise state manager'daki actions methodunu ifade eder.
//       // this.$store.dispatch('getBooks'); getBooks ise, actions icindeki getBooks isimli methodu ifade eder.
//       // soracagin bir sey var mi?
//       // yok şimdilik
//       // await ifadesi ve 106 numarali satirdaki async ifadeleri, buralarda asenkron bir operasyon var demek.
//       // simdi yapmamiz gereken son hamle kaldi
//       // 106 numarali satiri harekete gecirmek.
//     }
//   },
//   async created(){
//    await this.getBooks();
//    // component ayaga kalkarken getBooks isimli 106 numarali satirdati method calistirilacak.
//    // buraya kadar anlamadigin bir yer var mi?
//    // asenkron çağırmamızın sebebi ne
//    // API uzerinden cagrida bulunuyorsun, baska bir ifadeyle network katmaninda, verinin ne zaman gelecegi belli olmayan
//    // bir durumla karsi karsiyayiz. Bu durumda ya ekranda kum saati vs gosterirsin, yada asenkron yapmazsin, veri geldigi
//    // zaman, ilgili alanlara yerlesir, telefonda anlatirim.
//    // simdi yapmamiz gereken API adresi nedir?
//    // ariyorum tamam
//   }
// }
</script>



<style scoped>
    #subdiv {
        margin-left: 700px;
        margin-top: 100px;
        padding: 10px;
    }
    #subdiv ul{
      list-style-type: none;
      margin-left: -70px;
    }
    #subdiv ul li{
      float: left;
      padding: 5px;
    }
    #subdiv ul li h4{
      margin-top: 0px;
      margin-left: -150px;
      width: 300px;
    }
    #picexp1{
      margin-left: -110px;
    }
    #subdiv ul li img{
      margin-top: 5px;
    }
    #books{
      margin-left: 20%;
    }
    .card {
        box-shadow: 0 4px 8px 0 #e6e4e4;
        width: 180px;
        max-height: 50px;
        text-align: center;
        font-family: arial;
        float: left;
        margin-left: 1.6%;
    }
    .book-info .add-basket:hover {
        content: 'Sepete Ekle';
    }
    .book-info{
        border: none;
        max-width: auto;
        max-height: auto;
        background-color: #eeeeee;
    }
    .book-info h1, .book-info a{
        color: #e4002b;
        font-size: 12px;
        text-decoration: none;
    }
    .book-info img{
      max-width: 450px;
      max-height: 200px;
    }
    .price {
        color: #e4002b;
        font-size: 19px;
    }
    .card button {
        border: none;
        outline: 0;
        color: rgb(233, 233, 233);
        background-color: #e4002b;
        text-align: center;
        cursor: pointer;
        width: 120px;
        height: 50px;
        border-radius: 5px;
    }
    .card button:hover {
        opacity: 0.7;
    }
    #kitapismi{
      color: rgb(51, 49, 49);
      font-size: 15px;
    }
</style>
