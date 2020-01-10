<template>
	<div></div>
</template>

<script>
import iro from '@jaames/iro';

export default {
	name: 'ColorWheel',
	props: {
		value: { required: true },
		width: {
			default: 300,
		},
		borderWidth: {
			default: 1,
		},
		borderColor: {
			default: '#fff',
		},
		wheelUi: {
			default: true,
		},
		lightnessUi: {
			default: true,
		},
	},
	watch: {
		width: function(newVal, oldVal) {
			this.resize(newVal);
		},
	},
	data() {
		return {
			colorPicker: null,
		};
	},
	mounted() {
		if (!this.colorPicker) {
			this.colorPicker = new iro.ColorPicker(this.$el, {
				width: this.width,
				color: this.value,
				borderWidth: this.borderWidth,
				borderColor: this.borderColor,
				layout: this.layout,
			});

			this.colorPicker.on(['input:change'], (color) => {
				this.$emit('input', color);
			});
		}
	},
	computed: {
		color() {
			return this.colorPicker.color;
		},
		layout() {
			let layout = [];
			if (this.wheelUi) {
				layout.push({
					component: iro.ui.Wheel,
					options: {},
				});
			}
			if (this.lightnessUi) {
				layout.push({
					component: iro.ui.Slider,
					options: {},
				});
			}
			return layout;
		},
	},
	methods: {
		// https://iro.js.org/colorPicker_api.html#methods
		// Height is currently ignored
		resize(width, height) {
			this.colorPicker.resize(width, height);
		},
	},
};
</script>
