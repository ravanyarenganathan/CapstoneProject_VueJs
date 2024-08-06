<template>
  <div class="main">
    <div class="button-group">
      <button @click="filterItems('all')" :class="{ active: currentFilter === 'all' }">All</button>
      <button @click="filterItems('human')" :class="{ active: currentFilter === 'human' }">Human</button>
      <button @click="filterItems('animal')" :class="{ active: currentFilter === 'animal' }">Animal</button>
      <button @click="filterItems('alien')" :class="{ active: currentFilter === 'alien' }">Alien</button>
    </div>
    <div class="search-box">
      <input type="text" v-model="searchText" placeholder="Search by name...">
      <button class="search-button" @click="performSearch">Search</button>
      
    </div>
  </div>
       <div >
        <div class="card-value">
      <CardComponent v-for="item in filteredItems"
                    :key="item.id"
                    :id="item.id"
                    :image="item.image"
                    :name="item.name"
                    :status="item.status"
                    :species="item.species"
      />
    </div>
    </div>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1"> Prev </button>
      <button v-for="page in totalPages"
              :key="page"
              @click="setCurrentPage(page)"
              :class="{ active: currentPage === page }"
      >{{ page }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  
</template>

<script>
import CardComponent from '../components/Card.vue';

export default {
  name: 'ParentComponent',
  components: {
    CardComponent
  },
  created() {
    this.fetchCharacters(); 
  },
  data() {
    return {
      currentFilter: 'all',
      searchText: '',
      items: [],
      currentPage: 1,
      pageSize: 20,
      searchPerformed: false
    };
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.items.slice(startIndex, startIndex + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.pageSize);
    },
    filteredItems() {
      let filtered = this.items;

      
      if (this.currentFilter !== 'all') {
        filtered = filtered.filter(item => item.species.toLowerCase() === this.currentFilter.toLowerCase());
      }

     
      if (this.searchText.trim() !== '') {
        const searchTextLower = this.searchText.trim().toLowerCase();
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(searchTextLower)
        );
      }

      return filtered;
    }
  },
  methods: {
    async fetchCharacters() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.items = data.results; 
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    },
    filterItems(filter) {
      this.currentFilter = filter;
    },
    performSearch() {
      this.searchPerformed = true; 
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
};
</script>

<style scoped>
.button-group {
  margin-bottom: 10px;
  margin-top: 10px;
  position: absolute;
  margin-left: 65px;
  border: 1.5px solid black;
  border-radius: 4px;
}
.main{
  display: flex;

}
.card-value{
  display: flex;
    gap: 6px;
    flex-wrap: wrap;
}
.button-group button {
 
  padding: 5px 10px;
  cursor: pointer;
 
}
.button-group button.active {
  background-color: #111111;
  color: white;
 
}
.search-box {
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
  margin-left: 310px;
  border: 1.5px solid rgb(94, 93, 93);
  border-radius: 4px; 
}
.search-box input[type="text"] {
  padding: 5px 30px 5px 10px;
  width: 200px;
  height: 19px;
 
 
}
.search-button {
  cursor: pointer;
  padding: 5px 10px;
  height: 33px;
  border: 1.5px solid rgb(43, 43, 43);
  font-weight: bold;
  
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}
.pagination button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  border-radius: 4px;
}
.pagination button.active {
  background-color: #0a0b0b;
  color: white;
  border-color: #171818;
}
</style>
