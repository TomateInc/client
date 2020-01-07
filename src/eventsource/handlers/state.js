import store from '@/store';

const state = {
	eventType: 'state',
	handle: function(event) {
		const parsed = JSON.parse(event.data);
		store.commit('UPDATE_DEVICE_STATE', parsed);
	},
};

export default state;
