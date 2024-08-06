<template>
  <div class="main">
    <div class="card" @click="goToCardDetails" v-for="(data, index) in clickData" :key="index">
      <img :src="data.image" alt="Card Image" class="card-image">
      <div class="card-content">
        <h3 class="card-title">{{ data.name }}</h3>
        <p class="card-status">{{data.species}}-{{ data.status }}</p>
        <button :class="{ 'favorite': isFavorite }">
          {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
        </button>
        
      </div>
    </div>
  </div>
  <router-link :to="{ name: 'ParentComponent' }" class="backlist">Back to Card List</router-link>
  </template>
  
  <script>
  export default {
    data() {
    return {
      isFavorite: true,
      
    };
  },
    computed: {
      count() {
        return this.$store.getters.getCount;
      },
      clickData() {
        return this.$store.getters.getClickData;
      }
    },
    methods:{
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
        if(!this.isFavorite){
          this.$store.dispatch('decrement');
       
        }
      }
    }
  }
  </script>
 
 <style scoped>
 .main{
  display: flex;
  gap: 13px;
  margin-top: 30px;
  flex-wrap: wrap;
 }
  .card {
   
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-title {
    margin-top: 0;
    font-size: 12px;
    position:absolute;
  }
  
  .card-status {
    margin-top: 20px;
    color: #666;
    font-size: 12px;
    position: absolute;
    
  }
  
  button {
    padding: 8px 12px;
    background-color: #1f1f20;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 40px;
   
  }
  .backlist{
    display:flex;
    text-decoration: none;
    margin-top: 15px;
    padding: 8px 12px;
    cursor: pointer;
    
    
  }
  
  button.favorite {
    background-color: #131212;
  }
  </style>
  