import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import './index.css'
import Home from './View/Home.vue'
import login from './View/login.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: Home, name: "Home" },
      { path: "/login", component: login, name: "login" },
    ],
  });

createApp(App).use(router).mount('#app')
