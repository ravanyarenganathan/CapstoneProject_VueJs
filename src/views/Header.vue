<template>
    <div class="taskbar">
      <div class="character-favorites">
        <span class="character">Character </span>
        <span class="favorite">Favorites</span>
      </div>
      <div class="favorites">
        <i class="far fa-heart" @click="navigateToFavoritePage"></i>
        <span class="count"> {{ count }}</span>
        
        
      </div>
      
    </div>
  </template>
   <script>


  export default {
    name: 'HeaderComponent',
    computed: {
    count() {
      return this.$store.getters.getCount;
    }
  },
  methods: {
    navigateToFavoritePage() {
      this.$router.push('/favoritepage'); 
  }
}
    


}
    
  
  </script>
  
  <style>
  .taskbar {
    background-color: #0a0a0a;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .character-favorites {
    font-weight: bold;
    padding-left: 54px;
  }
  .favorite{
    color:#ccc
  }
  .count{
   margin-left: 3px;
  }
  .favorites {
    display: flex;
    align-items: center;
    color:#ccc
  }

  .character {
    margin-right: 10px;
    font-weight: bold;
    color:#fbfdfe;
  }
  
  .fas {
    cursor: pointer;
  }
  </style>
  