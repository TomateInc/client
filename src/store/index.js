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
		SET_DEVICES(state, device) {
			state.devices = device;
		},
		ADD_DEVICE(state, device) {
			state.devices.push(device);
		},
		UPDATE_DEVICE_STATE(state, device) {
			const dev = state.devices.find(d => d.id === device.id);
			if (dev) {
				dev.state = device.state;
			} else {
				state.devices.push(device);
			}
		},
	},
	actions: {
		loadDevices(context) {
			return Api()
				.get('device/')
				.then(
					result => {
						context.commit('SET_DEVICES', result.data);
					},
				);
		},
		callDeviceAction(context, { device, action, data }) {
			return Api()
				.post(`device/${device.id}/action/${action}`, data)
				.then(
					result => {
						// calling an action results in an updated device info
						context.commit('UPDATE_DEVICE_STATE', result.data);
					},
				);
		},
	},
});
