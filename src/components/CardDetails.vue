<template>
 
    <div v-if="character" class="card-details">
       
       <div class="info">
        <h3 class="card-title">{{ character.name }}</h3>
        <p class="card-status">{{character.species}}-{{ character.status }}</p>
        <p class="card-status"> Last Known Location:{{ character.location.name }}</p>
        <p class="card-status">First seen in:{{ character.episode[0] }}</p>
        <button @click="toggleFavorite(character)" :class="{ 'favorite': isFavorite }">
          {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
        </button>
       </div>
       <div><img :src="character.image" alt="Card Image" class="card-image"></div>
      </div>
      
    
    <div v-else>
      <p>Loading...</p>
    </div>
    <router-link :to="{ name: 'ParentComponent' }" class="backlist">Back to Card List</router-link>
  </template>
  
  <script>
  export default {
    name:'CardDetails',
    props: {
        id: {
      type: String, 
      required: true
    }
      
    },
    data() {
    return {
      isFavorite: false,
      character: null
    };
  },
  mounted(){
    this.fetchCharacterDetails();
  },
    created() {
    this.fetchCharacterDetails();
  },
  methods: {
    async fetchCharacterDetails() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${this.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.character = data;
        console.log(this.character) 
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    },
    toggleFavorite(data) {
        event.stopPropagation();
        console.log("toogle")
        this.isFavorite = !this.isFavorite;
        if(this.isFavorite){
          this.$store.dispatch('increment',data);
        }else{
          this.$store.dispatch('decrement');
        }
      
      }
  },
    computed: {
      card() {
          return {
          id: this.id,
          title: 'Card Title', 
          description: 'Card Description' 
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .card-details{
    display: flex;
    justify-content: space-between;
    border:2px solid rgb(142, 139, 139);
    margin-top:20px;
  }
  .card-title {
    margin-top: 0;
    position:absolute;
  }
  .card-status {
    margin-top: 34px;
    display: flex;
    
    
  }
  button {
    padding: 8px 12px;
    background-color: #1f1f20;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display:flex
  }
  
  button.favorite {
    background-color: #131212;
  }
  .info{
    margin-top: 20px;
    margin-left:10px;
  }
  .backlist{
    display:flex;
    text-decoration: none;
    margin-top: 15px;
    padding: 8px 12px;
    
    cursor: pointer;
    
    
  }
  </style>
  