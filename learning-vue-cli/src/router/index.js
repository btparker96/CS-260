import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'
import Create from '../views/Create.vue'

//To understand this code, read the comments starting with index.js and enduing with main.js, App.vue, and index.html

Vue.use(VueRouter) //VueRouter is the router

const routes = [ //this routes object has the url path, a name that can be used instead of the path, and component that connects the view to the path.
  //Only components in the views folder get placed here,  "view import components from src/components. A component is a
  //self-contained piece of your application. A view is just a component that is used as the entry for a route."
  //To see an example of a component got ot HelloWorld.vue componenet in the src/componenets directory
  {
    path: '/',
    name: 'homeVue',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'aboutVue',
  //   component: AboutView
  //   // path: '/about',
  //   // name: 'about',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/create',
    name: 'createVue',
    component: Create,
  }
]

const router = new VueRouter({ //Create a new router and give it the routes
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router //This router is now available to use thorought the program
