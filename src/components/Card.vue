<template>
    <div class="card" @click="goToCardDetails" >
      <img :src="image" alt="Card Image" class="card-image">
      <div class="card-content">
        <h3 class="card-title">{{ name }}</h3>
        <p class="card-status">{{species}}-{{ status }}</p>
        <button @click="toggleFavorite({ id, image, name, status, species })" :class="{ 'favorite': isFavorite }">
          {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
        </button>
        
      </div>
    </div>
  </template>
  
  <script>



  export default {
    name:'CardComponent',
    props: {
      id:{
           type:Number,
           required:true
      },
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      status: {
        type: String,
        default: 'Available'
      },
      species: {
        type: String,
        
      }
    },
    data() {
      return {
        isFavorite: false,
        count:0
      };
    },
    methods: {
      goToCardDetails() {
        console.log('entering a push')
      this.$router.push({ name: 'CardDetails', params: { id: this.id },path:`/card/:id` });
      
    },
    computed:{
      isFavorite() {
      return this.$store.getters.isFavorite(this.id);
    }
    },
    
      toggleFavorite(data) {
        event.stopPropagation();
        this.isFavorite = !this.isFavorite;
        if(this.isFavorite){
          this.$store.dispatch('increment',data);
        }else{
          this.$store.dispatch('decrement');
        }
      
      }
    }
  };
  </script>
  
  <style scoped>
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
  
  button.favorite {
    background-color: #131212;
  }
  </style>
  