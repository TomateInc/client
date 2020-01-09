<template>
	<v-card :loading="loading">
		<v-card-title v-text="name"></v-card-title>

		<v-card-actions>
			<v-switch v-model="state.on" :label="state.on ? 'On' : 'Off'" @change="update" :loading="loading"></v-switch>
			<!-- <v-color-picker></v-color-picker> -->
			<v-spacer />
			<v-icon large>{{ state.on ? 'mdi-lightbulb-on' : 'mdi-lightbulb' }}</v-icon>
		</v-card-actions>
		<v-card-actions>
			<slider-picker v-model="color" @input="update" :swatches="['1', '.80', '.65', '.50', '.35', '.20', '0']" />
		</v-card-actions>
		<v-card-actions>
			<v-slider v-model="state.brightness" min="0" max="255" label="Brightness" @input="update" />
		</v-card-actions>
	</v-card>
</template>

<script>
import Vuex from 'vuex';
import { Slider } from 'vue-color';

export default {
	name: 'Light',
	components: {
		'slider-picker': Slider,
	},
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
			color: {
				r: 255,
				g: 255,
				b: 255,
			},
		};
	},
	beforeMount() {
		this.color = this.state.color;
	},
	methods: {
		...Vuex.mapActions(['callDeviceAction']),
		async update() {
			this.loading = true;
			let dev = Object.assign({}, this.$props, this.$attrs);

			await this.callDeviceAction({
				device: dev,
				action: 'set',
				data: {
					on: this.state.on,
					brightness: this.state.brightness,
					color: {
						r: this.color.rgba.r,
						g: this.color.rgba.g,
						b: this.color.rgba.b,
					},
				},
			});

			this.loading = false;
		},
	},
};
</script>
