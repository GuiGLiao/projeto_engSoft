import { createWebHistory, createRouter } from 'vue-router'

import Home from '../src/views/Home.vue'
import Formulario from '../src/components/formulario.vue'
import Licenseb from '../src/views/licenseb.vue'
import Tutorial from '../src/views/tutorial.vue'
import Circuitos from '../src/views/circuitos.vue'
import Copyright from '../src/views/copyright.vue'
import Honda from '../src/views/honda.vue'
import Torneios from '../src/views/torneios.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/formulario', component: Formulario },
  { path: '/licenseb', component: Licenseb },
  { path: '/tutorial', component: Tutorial },
  { path: '/circuitos', component: Circuitos },
  { path: '/copyright', component: Copyright },
  { path: '/honda', component: Honda },
  { path: '/torneios', component: Torneios },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;