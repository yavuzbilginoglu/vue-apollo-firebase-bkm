<template>
  <div id="top">
      <div>
        <!-- <div class="alert alert-danger" role="alert" v-if="getError!=null">{{getError}}</div>
        <div class="alert alert-success" role="alert" v-if="getIsSuccess">{{getIsSuccess}}</div> -->
          <router-view/>
          <div>
            <div>
              <div>
                  <div v-if="stats.signIn">
                      <div><i class="fas fa-thumbs-up"></i><label><Counter :end="stats.signIn" /></label><span>Users Signed In</span></div>
                      <div><i class="fas fa-users"></i><label><Counter :end="stats.signUp" /></label><span>Users Signed Up</span></div>
                      <div><i class="fas fa-stopwatch"></i><label><Counter end="100" /></label><span>Uptime</span></div>
                  </div>
              </div>
            </div>
          </div>

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Searchbar from '@/components/Searchbar.vue';
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  data(){
      return{
          stats:{signIn:null, signUp:null}
      }
  },
  components: {
  },
  methods:{
      ...mapActions(['initAuth','setError'])
  },
  computed:{
      ...mapGetters(['getError', 'getUser', 'getIsSuccess', 'getApiUrl'])
  },
  created(){
    this.initAuth()
    axios.get(this.getApiUrl + 'stats')
        .then((response) => {
            try {
                this.stats.signIn = response.data.signIn
                this.stats.signUp = response.data.signUp
            } catch (error) {
                this.setError({error})
            }
        })
  }
};
</script>
<style scoped>
#top{
  margin-top: -40px;
  width: 100%;
  margin-left: -10px;
}
</style>