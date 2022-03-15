<template>
  <div>
    <div>
        <div>
          <Searchbar />
        </div>
        <div class="content">
        <template v-if="userData.email">
            <div>Profile</div>
            <div>     
                <input type="text" class="input" v-model="userData.email" placeholder="E-mail" disabled />
            </div>
            <div>  
                <input type="text" class="input" v-model="userData.displayName" placeholder="Display Name" />
            </div>
            <div> 
                <input type="text" class="input" v-model="userData.photoURL" placeholder="Avatar Pic URL" />
            </div>
            <div>
                <button @click="update" class="btn btn-3">Update Profile</button>
            </div>
        </template>
        <div>
          <router-link to="/logout">
            çıkış yap
          </router-link>
        </div>
        </div>
    </div><!-- mainbox -->

  </div>
</template>
