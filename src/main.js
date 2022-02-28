import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Counter from 'vue-js-counter'
import firebase from 'firebase'
import VueApollo from 'vue-apollo'



import VuePageTransition from 'vue-page-transition'
import VueTypedJs from 'vue-typed-js'

Vue.component('Counter', Counter);
Vue.config.productionTip = false
Vue.use(VuePageTransition)
Vue.use(VueTypedJs)
Vue.use(VueApollo)

import Vuelidate from "vuelidate"
Vue.use(Vuelidate)

    // please replace the all properties with your firebase account info
    let config = {
      apiKey: "AIzaSyBZv6rbJbsHC4O27gSGNAvAZ7YblkEvN3o",
      authDomain: "bkmkitap-vue.firebaseapp.com",
      databaseURL: "https://bkmkitap-vue-default-rtdb.firebaseio.com",
      projectId: "bkmkitap-vue",
      storageBucket: "bkmkitap-vue.appspot.com",
      messagingSenderId: "441014051845",
      appId: "1:441014051845:web:bdf1a442cd77f8eccd286c",
      measurementId: "G-V58DH2NPGX",
      graphqlUrl: "https://nameless-brook-320028.eu-central-1.aws.cloud.dgraph.io/graphql"
    }
  
  firebase.initializeApp(config);

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

  let app = ''
  firebase.auth().onAuthStateChanged( () =>  {
    if (!app) {
        app = new Vue({
            router,
            store,
            apolloProvider,
            render: h => h(App)
          }).$mount('#app')
        }
  })
  new Vue({
    apollo: {
      // Apollo specific options
    },
  })