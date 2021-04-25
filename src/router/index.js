import { createWebHistory, createRouter } from "vue-router"; 
import Home from "../views/Home.vue"; 
import Meditate from "../views/Meditate.vue"; 
import Test from "../views/test.vue"; 

const routes = [   
    {     
        path: "/",     
        name: "Home",     
        component: Home,   
    },
    {     
        path: "/meditate",     
        name: "meditate",     
        component: Meditate,  
        props: true, 
    },
    {     
        path: "/test",     
        name: "test",     
        component: Test,   
    },
    
]; 
const router = createRouter({   
    history: createWebHistory(),   
    routes, 
}); 

export default router

