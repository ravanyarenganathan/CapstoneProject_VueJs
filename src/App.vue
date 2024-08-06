<template>
 
   <HeaderComponent/>

  
  <router-view></router-view>
 
</template>

<script>

import HeaderComponent from '../src/views/Header.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
  
    
  },
  data(){
    return{}
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
</style>
