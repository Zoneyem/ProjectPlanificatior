import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addProject from "../views/addProject.vue";
import editProject from "../views/editProject.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "addProject",
    component: addProject,
  },
  {
    path: "/projects/:id", // rout parameter
    name: "editProject",
    component: editProject,
    props:true ///// to accept a prop comming from the editproject
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
