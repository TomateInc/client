<template>
	<v-card :loading="loading">
		<v-card-title v-text="name"></v-card-title>

		<v-card-actions>
			<v-switch v-model="state.on" :label="state.on ? 'On' : 'Off'" @change="toggle" :loading="loading"></v-switch>
			<!-- <v-color-picker></v-color-picker> -->
			<v-spacer />
			<v-icon large>{{ state.on ? 'mdi-lightbulb-on' : 'mdi-lightbulb' }}</v-icon>
		</v-card-actions>
	</v-card>
</template>

<script>
import Vuex from 'vuex';

export default {
	name: 'Light',
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		state: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			loading: false,
		};
	},
	methods: {
		...Vuex.mapActions(['callDeviceAction']),
		async toggle() {
			this.loading = true;
			let dev = Object.assign({}, this.$props, this.$attrs);

			await this.callDeviceAction({ device: dev, action: 'set', data: { on: this.state.on } });

			this.loading = false;
		},
	},
};
</script>
