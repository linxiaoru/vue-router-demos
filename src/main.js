// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Hello from './components/Hello'
import More from './components/More'



Vue.use(VueRouter);

const routes = [
	{path: '/home', name: 'HomePage', component: Home},
	{path: '/about', name: 'AboutPage', component: About},
	{path: '/more', name: 'MorePage', component: More,
	beforeEnter: (to, from, next) => {
        confirm("跳走咯",next());
       
      }},
	{path: '/', components: {	
	    default: Hello,	
		navbar: Navbar
	}}
	];
const router = new VueRouter({
	// mode: 'history',
	routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  ...App
})
