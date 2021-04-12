import { createWebHistory, createRouter } from "vue-router"; 
import Home from "../views/Home.vue"; 
import Meditate from "../views/Meditate.vue"; 

const routes = [   
    {     
        path: "/",     
        name: "Home",     
        component: Home,   
    },
    {     
        path: "/meditate",     
        name: "Meditate",     
        component: Meditate,   
    }
]; 
const router = createRouter({   
    history: createWebHistory(),   
    routes, 
}); 

export default router

