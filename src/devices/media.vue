<template>
	<v-card>
		<v-card-title v-text="name"></v-card-title>

		<v-card-actions>
			<v-btn class="mx-2" fab dark color="teal">
				<v-icon dark>{{ state.speed ? 'mdi-play' : 'mdi-pause' }}</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import Vuex from 'vuex';

export default {
	name: 'Media',
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
		config: {
			type: Object,
			required: true,
		},
	},
	methods: {
		...Vuex.mapActions(['callDeviceAction']),
		async update() {
			let dev = Object.assign({}, this.$props, this.$attrs);

			await this.callDeviceAction({
				device: dev,
				action: 'togglePlay',
			});
		},
	},
};
</script>
