<template>
	<v-card :loading="loading">
		<v-card-title v-text="name"></v-card-title>

		<v-card-actions>
			<v-switch v-model="state.on" :label="state.on ? 'On' : 'Off'" @change="update" :loading="loading"></v-switch>
			<!-- <v-color-picker></v-color-picker> -->
			<v-spacer />
			<v-icon large>{{ state.on ? 'mdi-lightbulb-on' : 'mdi-lightbulb' }}</v-icon>
		</v-card-actions>
		<v-card-actions ref="colorWheel" style="position: relative;" v-if="config.rgb">
			<color-wheel v-model="color" @input="update" :width="colorWheelWidth" />
			<resize-observer @notify="handleResize"></resize-observer>
		</v-card-actions>
		<v-card-actions  v-if="config.brightness">
			<v-slider v-model="state.brightness" min="0" max="255" label="Brightness" @input="update" />
		</v-card-actions>
	</v-card>
</template>

<script>
import Vuex from 'vuex';
import 'vue-resize/dist/vue-resize.css';
import { ResizeObserver } from 'vue-resize';
import ColorWheel from '@/components/ColorWheel';

export default {
	name: 'Light',
	components: {
		ResizeObserver,
		ColorWheel,
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
		config: {
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
			colorWheelWidth: 300, // default size of config
		};
	},
	created() {
		this.color = this.state.color;
	},
	mounted() {
		this.handleResize();
	},
	methods: {
		...Vuex.mapActions(['callDeviceAction']),
		handleResize() {
			if (this.config.rgb) {
				this.colorWheelWidth = this.innerDimensions(this.$refs.colorWheel).width;
			}
		},
		innerDimensions(node) {
			var computedStyle = getComputedStyle(node);

			let width = node.clientWidth; // width with padding
			let height = node.clientHeight; // height with padding

			height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
			width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
			return { height, width };
		},
		async update() {
			this.loading = true;
			let dev = Object.assign({}, this.$props, this.$attrs);

			// make sure the correct value is selected if the color hasn't changed yet
			let color = this.color.rgb || this.color;

			await this.callDeviceAction({
				device: dev,
				action: 'set',
				data: {
					on: this.state.on,
					brightness: this.state.brightness,
					color: {
						r: color.r,
						g: color.g,
						b: color.b,
					},
				},
			});

			this.loading = false;
		},
	},
};
</script>
