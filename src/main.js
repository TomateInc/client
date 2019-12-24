import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const req = require.context('./devices/', true, /\.(js|vue)$/i);
req.keys().map(key => {
	const name = key.match(/\w+/)[0];
	return Vue.component(name, req(key).default)
});

//import VueSocketIO from 'vue-socket.io';
// Vue.use(
// 	new VueSocketIO({
// 		debug: true,
// 		connection: 'http://localhost:1992', //TODO make dynamic
// 		vuex: {
// 			store,
// 			actionPrefix: 'SOCKET_',
// 		},
// 	})
// );

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
