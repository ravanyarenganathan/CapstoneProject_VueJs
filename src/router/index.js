
import {createRouter,createWebHistory} from 'vue-router'
import CardDetails from '../components/CardDetails.vue'
import SearcherComponent from '../views/Searcher.vue'
import FavoritePage from '../views/FavoritePage.vue'


const routes = [
  {
    path: '/card/:id', 
    name: 'CardDetails',
    component: CardDetails,
    props:true
   
  },
  {
    path:'/',
    name:'ParentComponent',
    component:SearcherComponent,
  },
  {
    path:'/favoritepage',
    name:'FavoritePage',
    component:FavoritePage
  }
  // Other routes if needed
];

const router = createRouter({
   
    history: createWebHistory(),
    routes
  }, console.log("first"));

export default router;