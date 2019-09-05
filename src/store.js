import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/services/api';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		devices: [],
	},
	getters: {
		getField,
	},
	mutations: {
		updateField,
		SET_DEVICES(state, devices) {
			state.devices = devices;
		},
	},
	actions: {
		loadDevices(context) {
			Api()
				.get('device/')
				.then(
					result => {
						context.commit('SET_DEVICES', result.data);
					},
					error => {
						console.log(error);
					}
				);
		},
		// auto called by socket io
		SOCKET_deviceChange(context) {
			//TODO set changed device context
		},
	},
});
